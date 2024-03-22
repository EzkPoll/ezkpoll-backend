import { keccak256, Wallet } from 'ethers';
import { SNARK_FIELD_SIZE } from 'maci-crypto';
import { Keypair, PrivKey } from 'maci-domainobjs';

async function main() {
  const wallet = new Wallet(
    '67521890c17b7681a54e8fa74297b9eed910c66e18a68207b99547eee4ee88c8',
  );
  const signature = await wallet.signMessage('hello');
  const hashedSig = keccak256(signature);
  console.log({
    signature,
    hashedSig,
  });

  const result = genKeyPair(BigInt(hashedSig));
  console.log(result);
}

export const genKeyPair = (
  seed: bigint,
): { publicKey: string; privateKey: string } => {
  // create the new random keypair if there is no seed value
  const keypair = new Keypair(
    seed ? new PrivKey(seed % SNARK_FIELD_SIZE) : undefined,
  );

  // serialize both private and public keys
  const serializedPubKey = keypair.pubKey.serialize();
  const serializedPrivKey = keypair.privKey.serialize();

  return {
    publicKey: serializedPubKey,
    privateKey: serializedPrivKey,
  };
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
