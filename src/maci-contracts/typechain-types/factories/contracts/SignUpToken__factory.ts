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
import type { PayableOverrides } from "../../common";
import type {
  SignUpToken,
  SignUpTokenInterface,
} from "../../contracts/SignUpToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "curTokenId",
        type: "uint256",
      },
    ],
    name: "giveToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x600b60808181526a29b4b3b72ab82a37b5b2b760a91b60a081815261010060405260c084815260e092909252919290916200003e9160009190620000cd565b50805162000054906001906020840190620000cd565b505050620000716200006b6200007760201b60201c565b6200007b565b620001b0565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000db9062000173565b90600052602060002090601f016020900481019282620000ff57600085556200014a565b82601f106200011a57805160ff19168380011785556200014a565b828001600101855582156200014a579182015b828111156200014a5782518255916020019190600101906200012d565b50620001589291506200015c565b5090565b5b808211156200015857600081556001016200015d565b600181811c908216806200018857607f821691505b60208210811415620001aa57634e487b7160e01b600052602260045260246000fd5b50919050565b61145380620001c06000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb4651461021b578063b88d4fde1461022e578063c87b56dd14610241578063e985e9c514610254578063f2fde38b1461029057600080fd5b806370a08231146101d9578063715018a6146101fa5780638da5cb5b1461020257806395d89b411461021357600080fd5b8063193f974c116100de578063193f974c1461018d57806323b872dd146101a057806342842e0e146101b35780636352211e146101c657600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e366004610fd6565b6102a3565b60405190151581526020015b60405180910390f35b6101406102f5565b60405161012f919061104b565b61016061015b36600461105e565b610387565b6040516001600160a01b03909116815260200161012f565b61018b610186366004611093565b6103ae565b005b61018b61019b366004611093565b6104c9565b61018b6101ae3660046110bd565b6104df565b61018b6101c13660046110bd565b610510565b6101606101d436600461105e565b61052b565b6101ec6101e73660046110f9565b61058b565b60405190815260200161012f565b61018b610611565b6006546001600160a01b0316610160565b610140610625565b61018b610229366004611114565b610634565b61018b61023c366004611166565b61063f565b61014061024f36600461105e565b610677565b610123610262366004611242565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61018b61029e3660046110f9565b6106eb565b60006001600160e01b031982166380ac58cd60e01b14806102d457506001600160e01b03198216635b5e139f60e01b145b806102ef57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461030490611275565b80601f016020809104026020016040519081016040528092919081815260200182805461033090611275565b801561037d5780601f106103525761010080835404028352916020019161037d565b820191906000526020600020905b81548152906001019060200180831161036057829003601f168201915b5050505050905090565b600061039282610764565b506000908152600460205260409020546001600160a01b031690565b60006103b98261052b565b9050806001600160a01b0316836001600160a01b0316141561042c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061044857506104488133610262565b6104ba5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610423565b6104c483836107c3565b505050565b6104d1610831565b6104db828261088b565b5050565b6104e93382610a16565b6105055760405162461bcd60e51b8152600401610423906112b0565b6104c4838383610a95565b6104c48383836040518060200160405280600081525061063f565b6000818152600260205260408120546001600160a01b0316806102ef5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610423565b60006001600160a01b0382166105f55760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610423565b506001600160a01b031660009081526003602052604090205490565b610619610831565b6106236000610bf9565b565b60606001805461030490611275565b6104db338383610c4b565b6106493383610a16565b6106655760405162461bcd60e51b8152600401610423906112b0565b61067184848484610d1a565b50505050565b606061068282610764565b600061069960408051602081019091526000815290565b905060008151116106b957604051806020016040528060008152506106e4565b806106c384610d4d565b6040516020016106d49291906112fd565b6040516020818303038152906040525b9392505050565b6106f3610831565b6001600160a01b0381166107585760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610423565b61076181610bf9565b50565b6000818152600260205260409020546001600160a01b03166107615760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610423565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906107f88261052b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6006546001600160a01b031633146106235760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610423565b6001600160a01b0382166108e15760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610423565b6000818152600260205260409020546001600160a01b0316156109465760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610423565b6000818152600260205260409020546001600160a01b0316156109ab5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610423565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080610a228361052b565b9050806001600160a01b0316846001600160a01b03161480610a6957506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610a8d5750836001600160a01b0316610a8284610387565b6001600160a01b0316145b949350505050565b826001600160a01b0316610aa88261052b565b6001600160a01b031614610ace5760405162461bcd60e51b81526004016104239061132c565b6001600160a01b038216610b305760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610423565b826001600160a01b0316610b438261052b565b6001600160a01b031614610b695760405162461bcd60e51b81526004016104239061132c565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610cad5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610423565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d25848484610a95565b610d3184848484610dea565b6106715760405162461bcd60e51b815260040161042390611371565b60606000610d5a83610ee8565b600101905060008167ffffffffffffffff811115610d7a57610d7a611150565b6040519080825280601f01601f191660200182016040528015610da4576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610ddd57610de2565b610dae565b509392505050565b60006001600160a01b0384163b15610edd57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610e2e9033908990889088906004016113c3565b6020604051808303816000875af1925050508015610e69575060408051601f3d908101601f19168201909252610e6691810190611400565b60015b610ec3573d808015610e97576040519150601f19603f3d011682016040523d82523d6000602084013e610e9c565b606091505b508051610ebb5760405162461bcd60e51b815260040161042390611371565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a8d565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610f275772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610f53576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610f7157662386f26fc10000830492506010015b6305f5e1008310610f89576305f5e100830492506008015b6127108310610f9d57612710830492506004015b60648310610faf576064830492506002015b600a83106102ef5760010192915050565b6001600160e01b03198116811461076157600080fd5b600060208284031215610fe857600080fd5b81356106e481610fc0565b60005b8381101561100e578181015183820152602001610ff6565b838111156106715750506000910152565b60008151808452611037816020860160208601610ff3565b601f01601f19169290920160200192915050565b6020815260006106e4602083018461101f565b60006020828403121561107057600080fd5b5035919050565b80356001600160a01b038116811461108e57600080fd5b919050565b600080604083850312156110a657600080fd5b6110af83611077565b946020939093013593505050565b6000806000606084860312156110d257600080fd5b6110db84611077565b92506110e960208501611077565b9150604084013590509250925092565b60006020828403121561110b57600080fd5b6106e482611077565b6000806040838503121561112757600080fd5b61113083611077565b91506020830135801515811461114557600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561117c57600080fd5b61118585611077565b935061119360208601611077565b925060408501359150606085013567ffffffffffffffff808211156111b757600080fd5b818701915087601f8301126111cb57600080fd5b8135818111156111dd576111dd611150565b604051601f8201601f19908116603f0116810190838211818310171561120557611205611150565b816040528281528a602084870101111561121e57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561125557600080fd5b61125e83611077565b915061126c60208401611077565b90509250929050565b600181811c9082168061128957607f821691505b602082108114156112aa57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000835161130f818460208801610ff3565b835190830190611323818360208801610ff3565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906113f69083018461101f565b9695505050505050565b60006020828403121561141257600080fd5b81516106e481610fc056fea2646970667358221220e1bc413a3cac698d11a043a93d20aad6bc37961948a453dbbfa969f5fcd082d064736f6c634300080a0033";

type SignUpTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignUpTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignUpToken__factory extends ContractFactory {
  constructor(...args: SignUpTokenConstructorParams) {
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
      SignUpToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SignUpToken__factory {
    return super.connect(runner) as SignUpToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignUpTokenInterface {
    return new Interface(_abi) as SignUpTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SignUpToken {
    return new Contract(address, _abi, runner) as unknown as SignUpToken;
  }
}
