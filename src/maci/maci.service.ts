import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { deployPoll, genKeyPair } from './commands';
import { JsonRpcProvider, Wallet } from 'ethers';

@Injectable()
export class MaciService implements OnApplicationBootstrap {
  constructor() {}

  async onApplicationBootstrap() {}

  genMaciKeyPair(seed: bigint | undefined, quiet = true) {
    const keypair = genKeyPair({
      seed,
      quiet,
    });

    return keypair;
  }

  async deployPoll() {
    //   --pubkey macipk.ab84a868c4b792c5481dda24ce1667879cd1ead54bf9758527344cbb7b5c2b96 \
    //   --duration 300 \
    //   --int-state-tree-depth 1 \
    //   --msg-tree-depth 2 \
    //   --msg-batch-depth 1 \
    //   --vote-option-tree-depth 2 \
    //   --subsidy-enabled false \
    //   --vkRegistryAddress 0xb7989F7114091c9a1E79337d109A150f290D4c5E
    const provider = new JsonRpcProvider(
      'https://optimism-sepolia.infura.io/v3/709f66312ff74761a30d551b6e9c5810',
    );
    const signer = new Wallet(
      '67521890c17b7681a54e8fa74297b9eed910c66e18a68207b99547eee4ee88c8',
      provider,
    );
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);
    const network = await signer.provider?.getNetwork();
    console.log('network', JSON.stringify(network, null, 2));

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
      signer,
    });
  }

  endPoll() {

  }
}
