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
import type { PayableOverrides } from "../../../../common";
import type {
  FreeForAllGatekeeper,
  FreeForAllGatekeeperInterface,
} from "../../../../contracts/gatekeepers/FreeForAllSignUpGatekeeper.sol/FreeForAllGatekeeper";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_maci",
        type: "address",
      },
    ],
    name: "setMaciInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526101ac806100136000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806313e65cf31461003b57806324b8fbf61461004e575b600080fd5b61004c61004936600461007c565b50565b005b61004c61005c3660046100b4565b5050565b80356001600160a01b038116811461007757600080fd5b919050565b60006020828403121561008e57600080fd5b61009782610060565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156100c757600080fd5b6100d083610060565b9150602083013567ffffffffffffffff808211156100ed57600080fd5b818501915085601f83011261010157600080fd5b8135818111156101135761011361009e565b604051601f8201601f19908116603f0116810190838211818310171561013b5761013b61009e565b8160405282815288602084870101111561015457600080fd5b826020860160208301376000602084830101528095505050505050925092905056fea26469706673582212206471e5babf57e8f2ecf0e54926ba6d42958057368e84c82680c4b629eb4e211464736f6c634300080a0033";

type FreeForAllGatekeeperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FreeForAllGatekeeperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FreeForAllGatekeeper__factory extends ContractFactory {
  constructor(...args: FreeForAllGatekeeperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: PayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FreeForAllGatekeeper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): FreeForAllGatekeeper__factory {
    return super.connect(runner) as FreeForAllGatekeeper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FreeForAllGatekeeperInterface {
    return new Interface(_abi) as FreeForAllGatekeeperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FreeForAllGatekeeper {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as FreeForAllGatekeeper;
  }
}
