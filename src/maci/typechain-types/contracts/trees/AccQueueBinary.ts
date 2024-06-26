/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface AccQueueBinaryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_DEPTH"
      | "calcMinHeight"
      | "enqueue"
      | "fill"
      | "getMainRoot"
      | "getSmallSRTroot"
      | "getSrIndices"
      | "getSubRoot"
      | "hash2"
      | "hash3"
      | "hash4"
      | "hash5"
      | "hashLeftRight"
      | "hashLevelLeaf"
      | "insertSubTree"
      | "merge"
      | "mergeSubRoots"
      | "numLeaves"
      | "owner"
      | "renounceOwnership"
      | "sha256Hash"
      | "subTreesMerged"
      | "transferOwnership"
      | "treeMerged"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(functionFragment: "MAX_DEPTH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calcMinHeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enqueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMainRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSmallSRTroot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSrIndices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hash2",
    values: [[BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash3",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash4",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash5",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLevelLeaf",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insertSubTree",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "merge", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "mergeSubRoots",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "numLeaves", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sha256Hash",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "subTreesMerged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "treeMerged",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "MAX_DEPTH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calcMinHeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enqueue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMainRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSmallSRTroot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSrIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSubRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash5", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLevelLeaf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insertSubTree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mergeSubRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numLeaves", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sha256Hash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "subTreesMerged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treeMerged", data: BytesLike): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AccQueueBinary extends BaseContract {
  connect(runner?: ContractRunner | null): AccQueueBinary;
  waitForDeployment(): Promise<this>;

  interface: AccQueueBinaryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  MAX_DEPTH: TypedContractMethod<[], [bigint], "view">;

  calcMinHeight: TypedContractMethod<[], [bigint], "view">;

  enqueue: TypedContractMethod<[_leaf: BigNumberish], [bigint], "nonpayable">;

  fill: TypedContractMethod<[], [void], "nonpayable">;

  getMainRoot: TypedContractMethod<[_depth: BigNumberish], [bigint], "view">;

  getSmallSRTroot: TypedContractMethod<[], [bigint], "view">;

  getSrIndices: TypedContractMethod<
    [],
    [[bigint, bigint] & { next: bigint; current: bigint }],
    "view"
  >;

  getSubRoot: TypedContractMethod<[_index: BigNumberish], [bigint], "view">;

  hash2: TypedContractMethod<
    [array: [BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;

  hash3: TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;

  hash4: TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;

  hash5: TypedContractMethod<
    [
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ],
    [bigint],
    "view"
  >;

  hashLeftRight: TypedContractMethod<
    [left: BigNumberish, right: BigNumberish],
    [bigint],
    "view"
  >;

  hashLevelLeaf: TypedContractMethod<
    [_level: BigNumberish, _leaf: BigNumberish],
    [bigint],
    "view"
  >;

  insertSubTree: TypedContractMethod<
    [_subRoot: BigNumberish],
    [void],
    "nonpayable"
  >;

  merge: TypedContractMethod<[_depth: BigNumberish], [bigint], "nonpayable">;

  mergeSubRoots: TypedContractMethod<
    [_numSrQueueOps: BigNumberish],
    [void],
    "nonpayable"
  >;

  numLeaves: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  sha256Hash: TypedContractMethod<[array: BigNumberish[]], [bigint], "view">;

  subTreesMerged: TypedContractMethod<[], [boolean], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  treeMerged: TypedContractMethod<[], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_DEPTH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calcMinHeight"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "enqueue"
  ): TypedContractMethod<[_leaf: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "fill"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getMainRoot"
  ): TypedContractMethod<[_depth: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSmallSRTroot"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSrIndices"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { next: bigint; current: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSubRoot"
  ): TypedContractMethod<[_index: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "hash2"
  ): TypedContractMethod<
    [array: [BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hash3"
  ): TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hash4"
  ): TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hash5"
  ): TypedContractMethod<
    [
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashLeftRight"
  ): TypedContractMethod<
    [left: BigNumberish, right: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashLevelLeaf"
  ): TypedContractMethod<
    [_level: BigNumberish, _leaf: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "insertSubTree"
  ): TypedContractMethod<[_subRoot: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "merge"
  ): TypedContractMethod<[_depth: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "mergeSubRoots"
  ): TypedContractMethod<[_numSrQueueOps: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "numLeaves"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sha256Hash"
  ): TypedContractMethod<[array: BigNumberish[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "subTreesMerged"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "treeMerged"
  ): TypedContractMethod<[], [boolean], "view">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
