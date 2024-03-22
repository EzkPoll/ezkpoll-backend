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
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace Pairing {
  export type G1PointStruct = { x: BigNumberish; y: BigNumberish };

  export type G1PointStructOutput = [x: bigint, y: bigint] & {
    x: bigint;
    y: bigint;
  };

  export type G2PointStruct = {
    x: [BigNumberish, BigNumberish];
    y: [BigNumberish, BigNumberish];
  };

  export type G2PointStructOutput = [
    x: [bigint, bigint],
    y: [bigint, bigint]
  ] & { x: [bigint, bigint]; y: [bigint, bigint] };
}

export declare namespace SnarkCommon {
  export type VerifyingKeyStruct = {
    alpha1: Pairing.G1PointStruct;
    beta2: Pairing.G2PointStruct;
    gamma2: Pairing.G2PointStruct;
    delta2: Pairing.G2PointStruct;
    ic: Pairing.G1PointStruct[];
  };

  export type VerifyingKeyStructOutput = [
    alpha1: Pairing.G1PointStructOutput,
    beta2: Pairing.G2PointStructOutput,
    gamma2: Pairing.G2PointStructOutput,
    delta2: Pairing.G2PointStructOutput,
    ic: Pairing.G1PointStructOutput[]
  ] & {
    alpha1: Pairing.G1PointStructOutput;
    beta2: Pairing.G2PointStructOutput;
    gamma2: Pairing.G2PointStructOutput;
    delta2: Pairing.G2PointStructOutput;
    ic: Pairing.G1PointStructOutput[];
  };
}

export interface IVerifierInterface extends Interface {
  getFunction(nameOrSignature: "verify"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verify",
    values: [BigNumberish[], SnarkCommon.VerifyingKeyStruct, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
}

export interface IVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): IVerifier;
  waitForDeployment(): Promise<this>;

  interface: IVerifierInterface;

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

  verify: TypedContractMethod<
    [
      _proof: BigNumberish[],
      vk: SnarkCommon.VerifyingKeyStruct,
      input: BigNumberish
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "verify"
  ): TypedContractMethod<
    [
      _proof: BigNumberish[],
      vk: SnarkCommon.VerifyingKeyStruct,
      input: BigNumberish
    ],
    [boolean],
    "view"
  >;

  filters: {};
}