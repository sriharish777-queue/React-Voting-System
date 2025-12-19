React-Based Decentralized Voting System Using Ethereum Blockchain
The React-Based Decentralized Voting System is a secure, transparent, and blockchain-powered web application designed for conducting elections without intermediaries. Built using React, Ethereum smart contracts, Ganache, Truffle, and MetaMask, this system ensures tamper-proof voting records while maintaining voter anonymity and integrity.

🔗 GitHub Repository:
👉 https://github.com/sriharish777-queue/React-Voting-System

🚀 Features

🔐 Secure wallet-based authentication using MetaMask

⛓️ Ethereum smart contracts for tamper-proof voting

🧾 Transparent and immutable vote storage on blockchain

👨‍💼 Admin panel to:

Add candidates

Control voting process

🧑‍💻 User-friendly React UI

⚡ Local blockchain testing using Ganache

🔄 Real-time interaction with smart contracts using Web3.js

🛠️ Tech Stack

Frontend: React + Vite

Blockchain: Ethereum (Solidity)

Smart Contract Tools: Truffle

Local Blockchain: Ganache

Wallet: MetaMask

Web3 Provider: Web3.js

Language: JavaScript, Solidity

📋 Requirements

Node.js (v18+ recommended)

npm

MetaMask browser extension

Ganache (GUI)

Truffle (npm install -g truffle)

Modern browser (Chrome / Edge)

📁 Project Structure
React-Voting-System/
│
├── client/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── components/
│       │   ├── WalletConnect.jsx
│       │   ├── AdminPanel.jsx
│       │   └── CandidateList.jsx
│       └── blockchain/
│           ├── web3.js
│           ├── votingContract.js
│           └── Voting.json
│
├── contracts/
│   ├── Migrations.sol
│   └── Voting.sol
│
├── migrations/
│   └── 1_initial_migration.js
│
├── build/
│   └── contracts/
│       ├── Migrations.json
│       └── Voting.json
│
├── truffle-config.js
├── package.json
├── package-lock.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/sriharish777-queue/React-Voting-System.git
cd React-Voting-System

2️⃣ Install Dependencies
npm install
cd client
npm install

3️⃣ Setup Ganache

Open Ganache

Create a workspace (Quickstart is fine)

Ensure:

RPC Server: http://127.0.0.1:7545

Network ID: 5777

4️⃣ Configure MetaMask

Install MetaMask extension

Add a custom network:

Network Name: Ganache Local
RPC URL: http://127.0.0.1:7545
Chain ID: 5777
Currency Symbol: ETH


Import Ganache Account 0 using its private key

Ensure MetaMask shows 100 ETH

5️⃣ Compile & Deploy Smart Contracts

From project root:

truffle compile
truffle migrate --reset

6️⃣ Copy Contract ABI to Client

Copy:

build/contracts/Voting.json


to:

client/src/blockchain/Voting.json

7️⃣ Start the React App
cd client
npm run dev


Open the URL shown by Vite (example):

http://localhost:5173

🧪 Usage

1.Connect MetaMask wallet

2.Admin adds candidates

3.Users vote using MetaMask transactions

4.Votes are stored on Ethereum blockchain (Ganache)

🧠 How It Works

Smart contracts define voting logic

React frontend interacts with contracts via Web3.js

MetaMask signs transactions

Ganache simulates Ethereum network locally

🎓 Academic Use Note

This project is intended for educational purposes, such as:

College mini / major projects

Blockchain demonstrations

Learning Ethereum DApps

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project with attribution.

👤 Author

Sriharish J
🔗 GitHub: https://github.com/sriharish777-queue
