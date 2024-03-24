/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Pairing,
  PairingInterface,
} from "../../../contracts/crypto/Pairing";

const _abi = [
  {
    inputs: [],
    name: "PairingAddFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "PairingMulFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "PairingOpcodeFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "PRIME_Q",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80638d532908146038575b600080fd5b605e7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4781565b60405190815260200160405180910390f3fea2646970667358221220749c9d4c6b543b674134a22061525f64b388c1601bb4f2ceb57325ed215e082b64736f6c634300080a0033";

type PairingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PairingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pairing__factory extends ContractFactory {
  constructor(...args: PairingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Pairing & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Pairing__factory {
    return super.connect(runner) as Pairing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PairingInterface {
    return new Interface(_abi) as PairingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Pairing {
    return new Contract(address, _abi, runner) as unknown as Pairing;
  }
}
