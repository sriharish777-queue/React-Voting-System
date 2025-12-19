pragma solidity ^0.5.16;

contract Voting {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Store candidates
    mapping(uint => Candidate) public candidates;

    // Track total candidates
    uint public candidatesCount;

    // Track voters (prevents double voting)
    mapping(address => bool) public voters;

    // Add candidate (admin functionality)
    function addCandidate(string memory _name) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount,
            _name,
            0
        );
    }

    // Vote function
    function vote(uint _candidateId) public {
        require(!voters[msg.sender], "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");

        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
    }
}
