/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../common";
import type {
  ConstantInitialVoiceCreditProxy,
  ConstantInitialVoiceCreditProxyInterface,
} from "../../../contracts/initialVoiceCreditProxy/ConstantInitialVoiceCreditProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getVoiceCredits",
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
  "0x60806040526040516101c63803806101c68339810160408190526100229161002a565b600055610043565b60006020828403121561003c57600080fd5b5051919050565b610174806100526000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b36543a914610030575b600080fd5b61004661003e36600461006e565b505060005490565b60405190815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561008157600080fd5b82356001600160a01b038116811461009857600080fd5b9150602083013567ffffffffffffffff808211156100b557600080fd5b818501915085601f8301126100c957600080fd5b8135818111156100db576100db610058565b604051601f8201601f19908116603f0116810190838211818310171561010357610103610058565b8160405282815288602084870101111561011c57600080fd5b826020860160208301376000602084830101528095505050505050925092905056fea264697066735822122052ec9792512c01d20fce469fdf9e956018ca68c38e45bef49d89266f5f10e09964736f6c634300080a0033";

type ConstantInitialVoiceCreditProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConstantInitialVoiceCreditProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConstantInitialVoiceCreditProxy__factory extends ContractFactory {
  constructor(...args: ConstantInitialVoiceCreditProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _balance: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_balance, overrides || {});
  }
  override deploy(
    _balance: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_balance, overrides || {}) as Promise<
      ConstantInitialVoiceCreditProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ConstantInitialVoiceCreditProxy__factory {
    return super.connect(runner) as ConstantInitialVoiceCreditProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConstantInitialVoiceCreditProxyInterface {
    return new Interface(_abi) as ConstantInitialVoiceCreditProxyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ConstantInitialVoiceCreditProxy {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ConstantInitialVoiceCreditProxy;
  }
}
