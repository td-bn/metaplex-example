export const createMetadata = (imgURL, creator) => {
  return {
    name: "Custom NFT #1",
    symbol: "CNFT",
    description:
      "A description about my custom NFT #1",
    seller_fee_basis_points: 500,
    external_url: "https://www.artism.com/",
    attributes: [
        {
            trait_type: "NFT type",
            value: "Custom"
        }
    ],
    collection: {
      name: "Test Collection",
      family: "Custom NFTs",
    },
    properties: {
      files: [
        {
          uri: imgURL,
          type: "image/png",
        },
      ],
      category: "image",
      maxSupply: 0,
      creators: [
        {
          address: creator,
          share: 100,
        },
      ],
    },
    image: imgURL,
  }
}