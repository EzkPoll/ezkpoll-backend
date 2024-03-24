import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma.service';
import { JsonRpcProvider, Wallet } from 'ethers';
import {
  genProofs,
  mergeMessages,
  mergeSignups,
  proveOnChain,
} from './commands';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MaciScheduler {
  provider: JsonRpcProvider;
  signer: Wallet;
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.provider = new JsonRpcProvider(this.config.getOrThrow('RPC_URL'));
    this.signer = new Wallet(this.config.getOrThrow('PK'), this.provider);
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async process() {
    const endedPolls: Array<{
      pollId: number;
      maciContractAddress: string;
    }> = [];
    for (let index = 0; index < endedPolls.length; index++) {
      const pollInfo = endedPolls[index];
      await mergeSignups({
        pollId: BigInt(pollInfo.pollId),
        maciContractAddress: pollInfo.maciContractAddress,
        quiet: false,
        signer: this.signer,
      });
      await mergeMessages({
        pollId: BigInt(pollInfo.pollId),
        maciContractAddress: pollInfo.maciContractAddress,
        quiet: false,
        signer: this.signer,
      });

      const proofs = await genProofs({
        outputDir: 'proofs',
        tallyFile: 'tally.json',
        tallyZkey:
          './zkeys/TallyVotes_10-1-2_test/TallyVotes_10-1-2_test.0.zkey',
        processZkey:
          './zkeys/ProcessMessages_10-2-1-2_test/ProcessMessages_10-2-1-2_test.0.zkey',
        pollId: BigInt(pollInfo.pollId),
        subsidyFile: '',
        subsidyZkey: '',
        rapidsnark: '',
        processWitgen: '',
        processDatFile: '',
        tallyWitgen:
          './zkeys/TallyVotes_10-1-2_test/TallyVotes_10-1-2_test_js/TallyVotes_10-1-2_test.wasm',
        tallyDatFile: '',
        subsidyWitgen: '',
        subsidyDatFile: '',
        coordinatorPrivKey: this.config.getOrThrow('CO_PK'),
        maciAddress: '0x31B74431502e5C10e56C7cBFD14b82e6A63934e2',
        transactionHash: '',
        processWasm:
          './zkeys/ProcessMessages_10-2-1-2_test/ProcessMessages_10-2-1-2_test_js/ProcessMessages_10-2-1-2_test.wasm',
        tallyWasm:
          './zkeys/TallyVotes_10-1-2_test/TallyVotes_10-1-2_test_js/TallyVotes_10-1-2_test.wasm',
        subsidyWasm: '',
        useWasm: true,
        stateFile: '',
        startBlock: undefined,
        endBlock: undefined,
        blocksPerBatch: 1000,
        tallyAddress: '',
        useQuadraticVoting: true,
        quiet: false,
        signer: this.signer,
      });

      await proveOnChain({
        pollId: BigInt(pollInfo.pollId),
        proofDir: 'proofs',
        subsidyEnabled: false,
        maciAddress: '0x31B74431502e5C10e56C7cBFD14b82e6A63934e2',
        messageProcessorAddress: '',
        tallyAddress: '',
        subsidyAddress: '',
        quiet: false,
        signer: this.signer,
      });

      // proofs.
    }
  }
}
