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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../../common";
import type {
  HatsGatekeeperMultiple,
  HatsGatekeeperMultipleInterface,
} from "../../../../contracts/gatekeepers/hatsGatekeepers/HatsGatekeeperMultiple";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_hats",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_criterionHats",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCriterionHat",
    type: "error",
  },
  {
    inputs: [],
    name: "NotWearingCriterionHat",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyMACI",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "criterionHat",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hats",
    outputs: [
      {
        internalType: "contract IHats",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maci",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
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
        name: "",
        type: "address",
      },
    ],
    name: "registered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405260405161088d38038061088d83398101604081905261002291610108565b8161002c336100a2565b6001600160a01b031660805260005b815181101561009a5760016003600084848151811061005c5761005c6101e8565b6020026020010151815260200190815260200160002060006101000a81548160ff02191690831515021790555080610093906101fe565b905061003b565b505050610227565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561011b57600080fd5b82516001600160a01b038116811461013257600080fd5b602084810151919350906001600160401b038082111561015157600080fd5b818601915086601f83011261016557600080fd5b815181811115610177576101776100f2565b8060051b604051601f19603f8301168101818110858211171561019c5761019c6100f2565b6040529182528482019250838101850191898311156101ba57600080fd5b938501935b828510156101d8578451845293850193928501926101bf565b8096505050505050509250929050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561022057634e487b7160e01b600052601160045260246000fd5b5060010190565b6080516106446102496000396000818161015401526102d901526106446000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b146100f8578063b2dd5c0714610109578063f2fde38b1461013c578063f99f02381461014f578063fb01269b1461017657600080fd5b806313e65cf31461009857806324b8fbf6146100ad57806334a0922c146100c0578063715018a6146100f0575b600080fd5b6100ab6100a63660046104c0565b610199565b005b6100ab6100bb3660046104f8565b6101ea565b6001546100d3906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100ab610368565b6000546001600160a01b03166100d3565b61012c6101173660046104c0565b60026020526000908152604090205460ff1681565b60405190151581526020016100e7565b6100ab61014a3660046104c0565b61037c565b6100d37f000000000000000000000000000000000000000000000000000000000000000081565b61012c6101843660046105ba565b60036020526000908152604090205460ff1681565b6101a16103fa565b6001600160a01b0381166101c85760405163d92e233d60e01b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b0316331461021557604051630346d90560e21b815260040160405180910390fd5b6001600160a01b03821660009081526002602052604090205460ff161561024f57604051630ea075bf60e21b815260040160405180910390fd5b60008180602001905181019061026591906105d3565b60008181526003602052604090205490915060ff1661029757604051632f76bd0160e21b815260040160405180910390fd5b6001600160a01b0383811660008181526002602052604090819020805460ff19166001179055516321a9204d60e11b81526004810191909152602481018390527f000000000000000000000000000000000000000000000000000000000000000090911690634352409a90604401602060405180830381865afa158015610322573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034691906105ec565b610363576040516306fdb0d360e31b815260040160405180910390fd5b505050565b6103706103fa565b61037a6000610454565b565b6103846103fa565b6001600160a01b0381166103ee5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6103f781610454565b50565b6000546001600160a01b0316331461037a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103e5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146104bb57600080fd5b919050565b6000602082840312156104d257600080fd5b6104db826104a4565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561050b57600080fd5b610514836104a4565b9150602083013567ffffffffffffffff8082111561053157600080fd5b818501915085601f83011261054557600080fd5b813581811115610557576105576104e2565b604051601f8201601f19908116603f0116810190838211818310171561057f5761057f6104e2565b8160405282815288602084870101111561059857600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000602082840312156105cc57600080fd5b5035919050565b6000602082840312156105e557600080fd5b5051919050565b6000602082840312156105fe57600080fd5b815180151581146104db57600080fdfea2646970667358221220b48ce94e180004e3f94f5e7c455830feb7dbba33ed906512818923fa0587d83264736f6c634300080a0033";

type HatsGatekeeperMultipleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HatsGatekeeperMultipleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HatsGatekeeperMultiple__factory extends ContractFactory {
  constructor(...args: HatsGatekeeperMultipleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _hats: AddressLike,
    _criterionHats: BigNumberish[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_hats, _criterionHats, overrides || {});
  }
  override deploy(
    _hats: AddressLike,
    _criterionHats: BigNumberish[],
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_hats, _criterionHats, overrides || {}) as Promise<
      HatsGatekeeperMultiple & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): HatsGatekeeperMultiple__factory {
    return super.connect(runner) as HatsGatekeeperMultiple__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HatsGatekeeperMultipleInterface {
    return new Interface(_abi) as HatsGatekeeperMultipleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): HatsGatekeeperMultiple {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as HatsGatekeeperMultiple;
  }
}
