import React from "react";

const MostVotes = ({ anecdotes, allVote }) => {
  const highestVotes = Math.max(...allVote);
  const mostVotesIndex = allVote.indexOf(highestVotes);
  const mostVotes = anecdotes[mostVotesIndex];
  if (highestVotes === 0) {
    return (
      <div>
        <p> No Vote Yet</p>
        <p>You need to vote first</p>
      </div>
    );
  }
  return (
    <div>
      <p>{mostVotes}</p>
      <p>{highestVotes}</p>
    </div>
  );
};

export default MostVotes;
