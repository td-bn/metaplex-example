import { actions, utils, programs, NodeWallet} from '@metaplex/js'; 
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

// NOTE: @metaplex/js still in active dev

export const mintNFT = async (keypair, metadataURL) => {
  const connection = new Connection(
    clusterApiUrl('devnet'),
    'confirmed',
  )
  const feePayerAirdropSignature = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL)
  await connection.confirmTransaction(feePayerAirdropSignature)

  const mintNFTResponse = await actions.mintNFT({
    connection,
    wallet: new NodeWallet(keypair),
    uri: metadataURL,
    maxSupply: 1
  })

  return mintNFTResponse
}