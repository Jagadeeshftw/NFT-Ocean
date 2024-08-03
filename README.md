
# NFT Ocean

Welcome to **NFT Ocean** - your premier destination for discovering, buying, and selling unique digital art on the blockchain. Inspired by the seamless and professional experience of OpenSea, NFT Ocean is designed to provide artists and collectors with a user-friendly, secure, and immersive platform.

## Features

- **User Dashboard**: Manage your profile, view your NFTs, and keep track of your sales and purchases.
- **Create NFTs**: Mint your digital art as NFTs with ease and list them for sale in our marketplace.
- **Explore NFTs**: Discover unique digital art artists create worldwide.
- **Secure Transactions**: All transactions are secured by the blockchain, ensuring transparency and security.
- **Responsive Design**: Access NFT Ocean on any device, with a design optimized for desktop and mobile experiences.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed on your machine.
- MetaMask or another Ethereum wallet extension installed in your browser.
- Access to the Polygon (Matic) network for lower transaction fees.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Jagadeeshftw/NFT-Ocean.git
    cd NFT-Ocean
    ```
2. **Create .env.local file with below variables under ./frontend**

    ```bash
    # The client ID for the template service(Thirdweb) used in your application.
    NEXT_PUBLIC_TEMPLATE_CLIENT_ID="<client_id>"
    # The JSON Web Token (JWT) for authenticating with the Pinata API.
    PINATA_JWT="<your_pinata_jwt>"
    # The URL of the IPFS gateway used to access files stored on IPFS.
    NEXT_PUBLIC_GATEWAY_URL="https://gateway.pinata.cloud/ipfs/"
    # The hostname of the IPFS gateway used to access files stored on IPFS.
    NEXT_PUBLIC_GATEWAY_HOSTNAME="gateway.pinata.cloud"
    # The connection URL for your PostgreSQL database.
    POSTGRES_URL="postgres://<username>:<password>@<host>:<port>/<database>"
    # The connection URL specifically for Prisma to interact with your PostgreSQL database.
    POSTGRES_PRISMA_URL="postgres://<username>:<password>@<host>:<port>/<database>"
    # The connection URL for your PostgreSQL database without SSL.
    POSTGRES_URL_NO_SSL="postgres://<username>:<password>@<host>:<port>/<database>"
    # The connection URL for your PostgreSQL database without connection pooling.
    POSTGRES_URL_NON_POOLING="postgres://<username>:<password>@<host>:<port>/<database>"
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

To deploy the project, follow these steps:

1. **Build the application:**

    ```bash
    npm run build
    ```

2. **Start the server:**

    ```bash
    npm start
    ```

### Tech Stack

- **Frontend:** React, Next.js, Typescript, Tailwind CSS
- **Backend:** Node.js, Express
- **Blockchain:** Solidity, Hardhat
- **Database:** IPFS, PostgreSQL, Prisma
- **Authentication:** MetaMask

## Usage

### Minting an NFT

1. Navigate to the **Create NFT** section in the user dashboard.
2. Upload your digital art, fill in the details (name, description, price), and mint your NFT.
3. Your NFT will be listed for sale in the marketplace once the transaction is confirmed.

### Buying an NFT

1. Explore the marketplace to discover NFTs.
2. Click on an NFT to view its details.
3. Click the **Buy** button and confirm the transaction in your wallet.

## Contributing

We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or bug fix.
3. Commit your changes and push the branch to your forked repository.
4. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [OpenZeppelin](https://openzeppelin.com/): For their robust and secure smart contract library.
- [Next.js](https://nextjs.org/): For the powerful React framework.
- [Infura](https://infura.io/): For the Ethereum API and infrastructure.

## Contact

For support or inquiries, please reach out via the project's GitHub [issues](https://github.com/Jagadeeshftw/NFT-Ocean/issues) or [discussions](https://github.com/Jagadeeshftw/NFT-Ocean/discussions).

---

Thank you for choosing NFT Ocean. We hope you enjoy the experience of discovering, creating, and trading unique digital art!
