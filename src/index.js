import { Keypair } from '@solana/web3.js'
import 'dotenv/config'
import { mintNFT } from './mint.js'
import { pinFileToIPFS, pinJSONToIPFS } from './upload.js'
import { createMetadata } from './utils.js'

// Pinata secrets
const API_KEY = process.env.API_KEY 
const API_SECRET = process.env.API_SECRET

async function main() {
  const keypair = Keypair.generate()
  
  // Upload image
  let data = await pinFileToIPFS(API_KEY, API_SECRET)
  const imgURL = 'https://gateway.pinata.cloud/ipfs/' + data.IpfsHash
  
  // Upload metadata
  const metadata = createMetadata(imgURL, keypair.publicKey)
  data = await pinJSONToIPFS(API_KEY, API_SECRET, metadata)
  const metadataURL = 'https://gateway.pinata.cloud/ipfs/' + data.IpfsHash

  // Mint NFT
  const mintResp = await mintNFT(keypair, metadataURL)
  const {mint} = mintResp
  const solscanURL = `https://explorer.solana.com/address/${mint.toBase58()}?cluster=devnet`

  console.log('Image URL: ', imgURL)
  console.log('Metadata URL: ', metadataURL)
  console.log('Solscan URL: ', solscanURL)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
