import WalletConnect from "./components/WalletConnect.jsx";
import CandidateList from "./components/CandidateList.jsx";
import AdminPanel from "./components/AdminPanel.jsx";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blockchain Decentralized Voting System</h1>
      <WalletConnect />
      <hr />
      <AdminPanel />
      <hr />
      <CandidateList />
    </div>
  );
}

export default App;
