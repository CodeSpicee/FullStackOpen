import React from "react";

const MostVotes = ({ anecdotes, allVote }) => {
  const highestVotes = Math.max(...allVote);
  const mostVotesIndex = allVote.indexOf(highestVotes);
  const mostVotes = anecdotes[mostVotesIndex];
  if (highestVotes === 0) {
    return <p> No Vote Yet</p>;
  }
  return (
    <div>
      <p>{mostVotes}</p>
      <p>{highestVotes}</p>
    </div>
  );
};

export default MostVotes;
