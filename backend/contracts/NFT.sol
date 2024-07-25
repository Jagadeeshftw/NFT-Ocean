// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public contractAddress;

    // Mapping from token URI to token ID
    mapping(string => uint256) private _tokenURIsToTokenID;

    event TokenCreated(uint256 indexed tokenId, address owner, string tokenURI);

    /**
     * @dev Constructor that sets the marketplace address and initializes the ERC721 token.
     * @param marketplaceAddress Address of the marketplace contract.
     */
    constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
        contractAddress = marketplaceAddress;
    }

    /**
     * @dev Function to mint a new token.
     * @param tokenURI URI for the token metadata.
     * @return The ID of the newly minted token.
     */
    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        // Mint the new token and set its URI
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        // Store the mapping from token URI to token ID
        _tokenURIsToTokenID[tokenURI] = newItemId;

        // Approve the marketplace to manage the token
        setApprovalForAll(contractAddress, true);

        emit TokenCreated(newItemId, msg.sender, tokenURI); // Emit the event

        return newItemId;
    }

    /**
     * @dev Function to get the token ID based on the token URI.
     * @param tokenURI URI of the token metadata.
     * @return The ID of the token with the given URI.
     */
    function getTokenIDByURI(string memory tokenURI) public view returns (uint256) {
        require(_tokenURIsToTokenID[tokenURI] != 0, "Token URI does not exist");
        return _tokenURIsToTokenID[tokenURI];
    }
}