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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../common";
import type {
  MessageProcessor,
  MessageProcessorInterface,
} from "../../contracts/MessageProcessor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vkRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poll",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BatchEndIndexTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "CurrentMessageBatchIndexTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProcessMessageProof",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxVoteOptionsTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "MessageAqNotMerged",
    type: "error",
  },
  {
    inputs: [],
    name: "NoMoreMessages",
    type: "error",
  },
  {
    inputs: [],
    name: "NumSignUpsTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "StateAqNotMerged",
    type: "error",
  },
  {
    inputs: [],
    name: "VkNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "VotingPeriodNotPassed",
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
    inputs: [],
    name: "currentMessageBatchIndex",
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
        name: "_currentMessageBatchIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numSignUps",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numMessages",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_messageTreeSubDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_voteOptionTreeDepth",
        type: "uint8",
      },
    ],
    name: "genProcessMessagesPackedVals",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_currentMessageBatchIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_messageRoot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numSignUps",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numMessages",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_currentSbCommitment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newSbCommitment",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_messageTreeSubDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_voteOptionTreeDepth",
        type: "uint8",
      },
    ],
    name: "genProcessMessagesPublicInputHash",
    outputs: [
      {
        internalType: "uint256",
        name: "inputHash",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "array",
        type: "uint256[2]",
      },
    ],
    name: "hash2",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "array",
        type: "uint256[3]",
      },
    ],
    name: "hash3",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "array",
        type: "uint256[4]",
      },
    ],
    name: "hash4",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "array",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "numBatchesProcessed",
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
    inputs: [],
    name: "poll",
    outputs: [
      {
        internalType: "contract IPoll",
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
        name: "_newSbCommitment",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "_proof",
        type: "uint256[8]",
      },
    ],
    name: "processMessages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "processingComplete",
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
    inputs: [],
    name: "sbCommitment",
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
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "sha256Hash",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vkRegistry",
    outputs: [
      {
        internalType: "contract IVkRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405260405162001f8a38038062001f8a8339810160408190526200002691620000bc565b62000031336200004f565b6001600160a01b0392831660a05290821660c0521660805262000106565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000b757600080fd5b919050565b600080600060608486031215620000d257600080fd5b620000dd846200009f565b9250620000ed602085016200009f565b9150620000fd604085016200009f565b90509250925092565b60805160a05160c051611df96200019160003960008181610151015261102c015260008181610190015261115f015260008181610267015281816102e30152818161037b015281816106dc0152818161072d015281816107d10152818161086d0152818161098b01528181610a1801528181610b2a01528181610f090152610f900152611df96000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80637a38d18f116100ad578063b1a263d311610071578063b1a263d314610289578063bea140b31461029c578063d13181b8146102af578063d1849f48146102b8578063f2fde38b146102cb57600080fd5b80637a38d18f146102115780638763d0c41461021a5780638da5cb5b1461023e5780639cfced971461024f578063a11752791461026257600080fd5b80633dfb88b2116100f45780633dfb88b2146101bb57806358bfc379146101ce5780635bb93995146101e157806362a361bb146101f4578063715018a61461020757600080fd5b80630cd3b91d1461012657806313fb89321461014c5780632b7ac3f31461018b5780633d6528a1146101b2575b600080fd5b61013961013436600461123f565b6102de565b6040519081526020015b60405180910390f35b6101737f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610143565b6101737f000000000000000000000000000000000000000000000000000000000000000081565b61013960025481565b6101396101c9366004611345565b610507565b6101396101dc3660046113e7565b610588565b6101396101ef36600461147d565b610622565b61013961020236600461149f565b610647565b61020f610681565b005b61013960015481565b60005461022e90600160a01b900460ff1681565b6040519015158152602001610143565b6000546001600160a01b0316610173565b61013961025d3660046114ff565b610695565b6101737f000000000000000000000000000000000000000000000000000000000000000081565b61020f610297366004611558565b6106cf565b6101396102aa3660046115e4565b610c02565b61013960035481565b6101396102c636600461163d565b610c3c565b61020f6102d93660046116a8565b610d3d565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638aa0ba926040518163ffffffff1660e01b8152600401602060405180830381865afa15801561033f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036391906116cc565b905060006103748b8a8a8888610c3c565b90506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634909229f6040518163ffffffff1660e01b81526004016040805180830381865afa1580156103d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fa91906116e5565b60408051600680825260e08201909252929450909250600091906020820160c080368337019050509050838160008151811061043857610438611709565b602002602001018181525050848160018151811061045857610458611709565b6020026020010181815250508c8160028151811061047857610478611709565b602002602001018181525050898160038151811061049857610498611709565b60200260200101818152505088816004815181106104b8576104b8611709565b60209081029190910101526104cd8284611735565b816005815181106104e0576104e0611709565b6020026020010181815250506104f581610588565b9e9d5050505050505050505050505050565b60405163248f667760e01b815260009073__$ce9c2c925f157047e54fa833ec4e61409f$__9063248f66779061054190859060040161174d565b602060405180830381865af415801561055e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058291906116cc565b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016002836040516020016105be919061177e565b60408051601f19818403018152908290526105d8916117b4565b602060405180830381855afa1580156105f5573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061061891906116cc565b61058291906117ef565b600061062c611212565b8381526020810183905261063f81610647565b949350505050565b6040516314d2f97b60e11b815260009073__$6574937f64fc1d7710ec0e28b7a36713bb$__906329a5f2f690610541908590600401611811565b610689610dbb565b6106936000610e15565b565b604051630926f44b60e31b815260009073__$20527677031d76601747626a9845039fe4$__90634937a25890610541908590600401611839565b6106d7610dbb565b6107007f0000000000000000000000000000000000000000000000000000000000000000610e65565b600054600160a01b900460ff161561072b5760405163a7f0397560e01b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b5f38c816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610789573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ad9190611861565b6107ca57604051631bb80bef60e31b815260040160405180910390fd5b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ac98e5df6040518163ffffffff1660e01b8152600401608060405180830381865afa15801561082d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108519190611883565b93509350935050600083600561086791906119c6565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bc14ee2b6040518163ffffffff1660e01b8152600401606060405180830381865afa1580156108c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ed91906119d5565b50604051631b9b8aa760e01b815260ff87166004820152909250600091506001600160a01b03831690631b9b8aa790602401602060405180830381865afa15801561093c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096091906116cc565b9050806109805760405163c0b868a560e01b815260040160405180910390fd5b600154610af25760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c17268d96040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109e7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0b91906116cc565b90508060038190555060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634f367f0f6040518163ffffffff1660e01b81526004016040805180830381865afa158015610a73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9791906116e5565b915060009050610aa786836117ef565b600283905590508115610aee5780610ad6578560026000828254610acb9190611a22565b90915550610aee9050565b8060026000828254610ae89190611a22565b90915550505b5050505b610b06600254826003548b8a8a8a8e610f02565b610b265760405160016268f24f60e01b0319815260040160405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634f367f0f6040518163ffffffff1660e01b81526004016040805180830381865afa158015610b85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba991906116e5565b91505060006002541115610bcf578360026000828254610bc99190611a22565b90915550505b610bf7896002546001546001610be59190611735565b610bef9088611a39565b8411156111d9565b505050505050505050565b6040516304b98e1d60e31b815260009073__$dc01a9744591ab014bc46a3b7671cdaefb$__906325cc70e890610541908590600401611a58565b600080610c4a8360056119c6565b90506000610c598560056119c6565b90506000610c67828a611735565b905086811115610c745750855b600160321b8310610c985760405163df0dbdbd60e01b815260040160405180910390fd5b600160321b8810610cbc57604051631805864f60e21b815260040160405180910390fd5b600160321b8910610ce0576040516328b2660560e21b815260040160405180910390fd5b600160321b8110610d04576040516309c5b7c360e21b815260040160405180910390fd5b609681901b60648a901b610d1c60328b901b86611735565b610d269190611735565b610d309190611735565b9998505050505050505050565b610d45610dbb565b6001600160a01b038116610daf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610db881610e15565b50565b6000546001600160a01b031633146106935760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610da6565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080826001600160a01b0316634909229f6040518163ffffffff1660e01b81526004016040805180830381865afa158015610ea5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec991906116e5565b90925090506000610eda8342611a22565b9050818111610efc57604051635c3017c560e11b815260040160405180910390fd5b50505050565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634f367f0f6040518163ffffffff1660e01b81526004016040805180830381865afa158015610f64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8891906116e5565b9150915060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bc14ee2b6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610fec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101091906119d5565b5050905060006110268d8d86868f8f8f8e6102de565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630bfbd4fe846001600160a01b031663652c76e46040518163ffffffff1660e01b8152600401602060405180830381865afa158015611097573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110bb9190611a80565b8b8b6110c88f60056119c6565b6040516001600160e01b031960e087901b16815260ff94851660048201529284166024840152921660448201526064810191909152608401600060405180830381865afa15801561111d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111459190810190611b52565b6040516308adcb2560e21b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906322b72c9490611198908a9085908790600401611cb0565b602060405180830381865afa1580156111b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f59190611861565b60038390556000805460ff60a01b1916600160a01b831515021781556002839055600180549161120883611da8565b9190505550505050565b60405180604001604052806002906020820280368337509192915050565b60ff81168114610db857600080fd5b600080600080600080600080610100898b03121561125c57600080fd5b883597506020890135965060408901359550606089013594506080890135935060a0890135925060c089013561129181611230565b915060e08901356112a181611230565b809150509295985092959890939650565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156112eb576112eb6112b2565b60405290565b60405160a0810167ffffffffffffffff811182821017156112eb576112eb6112b2565b604051601f8201601f1916810167ffffffffffffffff8111828210171561133d5761133d6112b2565b604052919050565b60006080828403121561135757600080fd5b82601f83011261136657600080fd5b6040516080810181811067ffffffffffffffff82111715611389576113896112b2565b60405280608084018581111561139e57600080fd5b845b818110156113b85780358352602092830192016113a0565b509195945050505050565b600067ffffffffffffffff8211156113dd576113dd6112b2565b5060051b60200190565b600060208083850312156113fa57600080fd5b823567ffffffffffffffff81111561141157600080fd5b8301601f8101851361142257600080fd5b8035611435611430826113c3565b611314565b81815260059190911b8201830190838101908783111561145457600080fd5b928401925b8284101561147257833582529284019290840190611459565b979650505050505050565b6000806040838503121561149057600080fd5b50508035926020909101359150565b6000604082840312156114b157600080fd5b82601f8301126114c057600080fd5b6114c86112c8565b8060408401858111156114da57600080fd5b845b818110156114f45780358452602093840193016114dc565b509095945050505050565b600060a0828403121561151157600080fd5b82601f83011261152057600080fd5b60405160a0810181811067ffffffffffffffff82111715611543576115436112b2565b6040528060a084018581111561139e57600080fd5b60008061012080848603121561156d57600080fd5b83359250602085603f86011261158257600080fd5b604051610100810181811067ffffffffffffffff821117156115a6576115a66112b2565b6040529185019180878411156115bb57600080fd5b8287015b848110156115d657803582529083019083016115bf565b509497909650945050505050565b6000606082840312156115f657600080fd5b82601f83011261160557600080fd5b6040516060810181811067ffffffffffffffff82111715611628576116286112b2565b60405280606084018581111561139e57600080fd5b600080600080600060a0868803121561165557600080fd5b853594506020860135935060408601359250606086013561167581611230565b9150608086013561168581611230565b809150509295509295909350565b6001600160a01b0381168114610db857600080fd5b6000602082840312156116ba57600080fd5b81356116c581611693565b9392505050565b6000602082840312156116de57600080fd5b5051919050565b600080604083850312156116f857600080fd5b505080516020909101519092909150565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156117485761174861171f565b500190565b60808101818360005b6004811015611775578151835260209283019290910190600101611756565b50505092915050565b815160009082906020808601845b838110156117a85781518552938201939082019060010161178c565b50929695505050505050565b6000825160005b818110156117d557602081860181015185830152016117bb565b818111156117e4576000828501525b509190910192915050565b60008261180c57634e487b7160e01b600052601260045260246000fd5b500690565b60408101818360005b600281101561177557815183526020928301929091019060010161181a565b60a08101818360005b6005811015611775578151835260209283019290910190600101611842565b60006020828403121561187357600080fd5b815180151581146116c557600080fd5b6000806000806080858703121561189957600080fd5b84516118a481611230565b60208601519094506118b581611230565b60408601519093506118c681611230565b60608601519092506118d781611230565b939692955090935050565b600181815b8085111561191d5781600019048211156119035761190361171f565b8085161561191057918102915b93841c93908002906118e7565b509250929050565b60008261193457506001610582565b8161194157506000610582565b816001811461195757600281146119615761197d565b6001915050610582565b60ff8411156119725761197261171f565b50506001821b610582565b5060208310610133831016604e8410600b84101617156119a0575081810a610582565b6119aa83836118e2565b80600019048211156119be576119be61171f565b029392505050565b60006116c560ff841683611925565b6000806000606084860312156119ea57600080fd5b83516119f581611693565b6020850151909350611a0681611693565b6040850151909250611a1781611693565b809150509250925092565b600082821015611a3457611a3461171f565b500390565b6000816000190483118215151615611a5357611a5361171f565b500290565b60608101818360005b6003811015611775578151835260209283019290910190600101611a61565b600060208284031215611a9257600080fd5b81516116c581611230565b600060408284031215611aaf57600080fd5b611ab76112c8565b9050815181526020820151602082015292915050565b600082601f830112611ade57600080fd5b611ae66112c8565b806040840185811115611af857600080fd5b845b818110156114f4578051845260209384019301611afa565b600060808284031215611b2457600080fd5b611b2c6112c8565b9050611b388383611acd565b8152611b478360408401611acd565b602082015292915050565b60006020808385031215611b6557600080fd5b825167ffffffffffffffff80821115611b7d57600080fd5b908401906101e08287031215611b9257600080fd5b611b9a6112f1565b611ba48784611a9d565b81526040611bb488828601611b12565b85830152611bc58860c08601611b12565b81830152611bd7886101408601611b12565b60608301526101c084015183811115611bef57600080fd5b80850194505087601f850112611c0457600080fd5b83519250611c14611430846113c3565b83815260069390931b84018501928581019089851115611c3357600080fd5b948601945b84861015611c5957611c4a8a87611a9d565b82529482019490860190611c38565b60808401525090979650505050505050565b8060005b6002811015610efc578151845260209384019390910190600101611c6f565b611c99828251611c6b565b6020810151611cab6040840182611c6b565b505050565b60006101408286835b6008811015611cd8578151835260209283019290910190600101611cb9565b505050806101008401526103208301611cfe828501875180518252602090810151910152565b6020915081860151611d14610180860182611c8e565b50604080870151611d29610200870182611c8e565b506060870151611d3d610280870182611c8e565b5060808701516101e06103008701528051928390528301916000906103408701905b80831015611d9057611d7c82865180518252602090810151910152565b938501936001929092019190830190611d5f565b50809550505050505082610120830152949350505050565b6000600019821415611dbc57611dbc61171f565b506001019056fea264697066735822122078b3ccee1f03076be822d6a2a2ae8558ba1c42b6f1a81208a38a7d64a86d2b1564736f6c634300080a0033";

type MessageProcessorConstructorParams =
  | [linkLibraryAddresses: MessageProcessorLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessageProcessorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class MessageProcessor__factory extends ContractFactory {
  constructor(...args: MessageProcessorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        MessageProcessor__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: MessageProcessorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ce9c2c925f157047e54fa833ec4e61409f\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT5.sol:PoseidonT5"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$6574937f64fc1d7710ec0e28b7a36713bb\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT3.sol:PoseidonT3"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$20527677031d76601747626a9845039fe4\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT6.sol:PoseidonT6"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$dc01a9744591ab014bc46a3b7671cdaefb\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT4.sol:PoseidonT4"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    _verifier: AddressLike,
    _vkRegistry: AddressLike,
    _poll: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _verifier,
      _vkRegistry,
      _poll,
      overrides || {}
    );
  }
  override deploy(
    _verifier: AddressLike,
    _vkRegistry: AddressLike,
    _poll: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _verifier,
      _vkRegistry,
      _poll,
      overrides || {}
    ) as Promise<
      MessageProcessor & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MessageProcessor__factory {
    return super.connect(runner) as MessageProcessor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageProcessorInterface {
    return new Interface(_abi) as MessageProcessorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MessageProcessor {
    return new Contract(address, _abi, runner) as unknown as MessageProcessor;
  }
}

export interface MessageProcessorLibraryAddresses {
  ["contracts/crypto/PoseidonT5.sol:PoseidonT5"]: string;
  ["contracts/crypto/PoseidonT3.sol:PoseidonT3"]: string;
  ["contracts/crypto/PoseidonT6.sol:PoseidonT6"]: string;
  ["contracts/crypto/PoseidonT4.sol:PoseidonT4"]: string;
}