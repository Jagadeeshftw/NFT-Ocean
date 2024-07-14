import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect, assert } from "chai";
import hre, { ethers } from "hardhat";

describe("NFTMarketPlace", function () {
  async function deployNFTMarketPlaceFixture() {
    const [owner, account1, account2] = await hre.ethers.getSigners();

    const MarketPlace = await hre.ethers.getContractFactory("MarketPlace");
    const marketPlace = await MarketPlace.deploy();

    const NFT = await hre.ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketPlace.getAddress());

    return { nft, marketPlace, owner, account1, account2 };
  }

  describe("Deployment", function () {
    it("Verify the contract deployment", async function () {
      const { nft, marketPlace } = await loadFixture(
        deployNFTMarketPlaceFixture
      );

      assert.ok(nft.getAddress(), "The NFT contract deployment is successful");
      assert.ok(
        marketPlace.getAddress(),
        "The Market Place contract deployment is successful"
      );
    });

    it("Verify certain argument values in an event during token creation", async function () {
      const { nft, owner } = await loadFixture(deployNFTMarketPlaceFixture);
      const tokenURI = "https://hello.com";
      await expect(nft.createToken(tokenURI))
        .to.emit(nft, "TokenCreated")
        .withArgs(1, owner.address, tokenURI);
    });

    it("Verify the creating & selling of market items", async function () {
      const { nft, marketPlace, owner, account1 } = await loadFixture(
        deployNFTMarketPlaceFixture
      );
      const tokenURI = "https://hello.com";
      await nft.createToken(tokenURI);
      const tokenId = (await nft.getTokenIDByURI(tokenURI)).toString();
      const price = ethers.parseUnits("0.0001", "ether");
      const listingPrice = ethers.parseUnits("10000", "wei");
      // Create the market item and verify the argument values in an event.
      await expect(
        marketPlace.createMarketItem(nft.getAddress(), tokenId, price, {
          value: listingPrice,
        })
      )
        .to.emit(marketPlace, "MarketItemCreated")
        .withArgs(
          anyValue, // itemId is an arbitrary value
          nft.getAddress(),
          tokenId,
          owner.address,
          ethers.ZeroAddress, // Initially, the owner should be the zero address
          price,
          false
        );
      const expectedItems = [
        [
          1, // itemId
          (await nft.getAddress()).toString(),
          tokenId,
          owner.address,
          ethers.ZeroAddress,
          price,
          false,
        ],
      ];

      const actualItems = await marketPlace.fetchItemsCreated();
      expect(
        actualItems.map((item) => [
          item.itemId,
          item.nftContract,
          item.tokenId.toString(),
          item.seller,
          item.owner,
          item.price,
          item.sold,
        ])
      ).to.deep.equal(expectedItems);

      await marketPlace
        .connect(account1)
        .createMarketSale(nft.getAddress(), tokenId, {
          value: price,
        });

      const expectedItemsForMyNFT = [
        [
          1, // itemId
          (await nft.getAddress()).toString(),
          tokenId,
          owner.address,
          account1.address,
          price,
          true,
        ],
      ];

      const myNFTs = await marketPlace.connect(account1).fetchMyNFTs();
      expect(myNFTs).to.deep.equal(expectedItemsForMyNFT);

      const unsoldItems = await marketPlace.fetchMarketItems();
      expect(unsoldItems).to.deep.equal([]);
    });
  });
});
