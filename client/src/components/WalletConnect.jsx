import { useEffect, useState } from "react";
import web3 from "../blockchain/web3";

function WalletConnect() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    async function loadAccount() {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
    loadAccount();
  }, []);

  return (
    <p>
      <strong>Connected Wallet:</strong> {account}
    </p>
  );
}

export default WalletConnect;
