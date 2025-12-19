import { useState } from "react";
import votingContract from "../blockchain/votingContract";
import web3 from "../blockchain/web3";

function AdminPanel() {
  const [name, setName] = useState("");

  const addCandidate = async () => {
    const accounts = await web3.eth.getAccounts();
    await votingContract.methods
      .addCandidate(name)
      .send({ from: accounts[0] });
    alert("Candidate added");
  };

  return (
    <div>
      <h3>Admin Panel</h3>
      <input
        placeholder="Candidate name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addCandidate}>Add Candidate</button>
    </div>
  );
}

export default AdminPanel;
