## Simple NFT mint example using Metaplex

Simple script that runs on devnet and:
1. Uploads image to IPFS using Pinata 
2. Uploads metadata to IPFS using Pinata
3. Mints NFT using @metaplex/js

### Usage
Install dependencies:
```
yarn
```

You'll need Pinata secrets to upload to [Pinata](https://docs.pinata.cloud/).
Create an account and generate API keys.

Add the following environment variables to your `.env` file:

```
API_KEY=<Your API key>
API_SECRET=<Your API secret>
```

Run:

```
yarn start
```

Example output:
```javascript
Image URL:  https://gateway.pinata.cloud/ipfs/QmZD7yDhMYPYbviUBi1SbxeoqcSpLdhaHbewuAJ7z9xFuj
Metadata URL:  https://gateway.pinata.cloud/ipfs/QmVrRwghWqmUMo3HPQ5rMftS3CuWPjjMbJStHoJx3Zde91
Solscan URL:  https://explorer.solana.com/address/5sgmdQpNr2M1wzkTedGfB3GtbtDL6LFonYFJ2ZjnFfiV?cluster=devnet

```

### Source
#### [upload.js](src/upload.js) 
* Handles the uploading of image and metadata
* image url is hardcoded from the [asset](assets/) folder

#### [mint.js](src/mint.js)
* Handles minting of NFT with given metadata

#### [utils.js](src/utils.js)
* Creates and returns simple metadata for NFT

#### [index.js](src/index.js)
* Handles key creation. Orchestrates NFT creation. 


### Resources and Links
* https://docs.pinata.cloud/
* https://solanacookbook.com/references/nfts.html
* https://docs.metaplex.com/
