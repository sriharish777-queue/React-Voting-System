import { useEffect, useState } from "react";
import votingContract from "../blockchain/votingContract";
import web3 from "../blockchain/web3";

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function loadCandidates() {
      const count = await votingContract.methods.candidatesCount().call();
      const list = [];
      for (let i = 1; i <= count; i++) {
        const c = await votingContract.methods.candidates(i).call();
        list.push(c);
      }
      setCandidates(list);
    }
    loadCandidates();
  }, []);

  const vote = async (id) => {
    const accounts = await web3.eth.getAccounts();
    await votingContract.methods.vote(id).send({ from: accounts[0] });
    alert("Vote casted");
  };

  return (
    <div>
      <h3>Vote Here</h3>
      {candidates.map((c) => (
        <div key={c.id}>
          {c.name} — Votes: {c.voteCount}
          <button onClick={() => vote(c.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
