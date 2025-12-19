import web3 from "./web3";
import Voting from "./Voting.json";

const networkId = "5777";
const deployedAddress = Voting.networks[networkId].address;

const votingContract = new web3.eth.Contract(
  Voting.abi,
  deployedAddress
);

export default votingContract;
