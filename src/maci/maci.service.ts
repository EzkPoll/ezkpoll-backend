import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { deployPoll, genKeyPair, signup } from './commands';
import { JsonRpcProvider, Wallet } from 'ethers';
import { ConfigService } from '@nestjs/config';
import {
  MACI__factory as MACIFactory,
  Poll__factory as PollFactory,
} from './typechain-types';
import { Message, PubKey } from 'maci-domainobjs';

@Injectable()
export class MaciService implements OnApplicationBootstrap {
  provider: JsonRpcProvider;
  signer: Wallet;
  constructor(private readonly config: ConfigService) {
    this.provider = new JsonRpcProvider(this.config.getOrThrow('RPC_URL'));
    this.signer = new Wallet(this.config.getOrThrow('PK'), this.provider);
  }

  async onApplicationBootstrap() {}

  genMaciKeyPair(seed: bigint | undefined, quiet = true) {
    const keypair = genKeyPair({
      seed,
      quiet,
    });

    return keypair;
  }

  async deployPoll() {
    const address = await this.signer.getAddress();
    // const balance = await this.provider.getBalance(address);
    // const network = await this.provider.getNetwork();
    // console.log('network', JSON.stringify(network, null, 2));

    console.log('address', address);
    return await deployPoll({
      pollDuration: 60 * 60, // 1 hour
      intStateTreeDepth: 1,
      messageTreeSubDepth: 1,
      messageTreeDepth: 2,
      voteOptionTreeDepth: 2,
      coordinatorPubkey:
        'macipk.ab84a868c4b792c5481dda24ce1667879cd1ead54bf9758527344cbb7b5c2b96',
      subsidyEnabled: false,
      maciAddress: '0x847D6304ec2a5FB5448eBDB4F8572Fc04ebeC049',
      vkRegistryAddress: '0xb7989F7114091c9a1E79337d109A150f290D4c5E',
      quiet: false,
      signer: this.signer,
    });
  }

  async signup(dto: { maciPubKey: string; sgData: string }) {
    return await signup({
      maciPubKey: dto.maciPubKey,
      maciAddress: '0x31B74431502e5C10e56C7cBFD14b82e6A63934e2',
      sgDataArg: '',
      ivcpDataArg: '',
      quiet: false,
      signer: this.signer,
    });
  }

  async publisPoll(dto: {
    pollAddress: string;
    message: Message;
    maciPubKey: string;
  }) {
    const pub = PubKey.deserialize(dto.maciPubKey);
    const pollContract = PollFactory.connect(dto.pollAddress, this.signer);
    const tx = await pollContract.publishMessage(
      dto.message.asContractParam(),
      pub.asContractParam(),
    );
    const receipt = await tx.wait();
    return receipt;
  }

  endPoll() {}
}
