import React from "react";
import { useState } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import MostVotes from "./components/MostVotes";

export const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [selected, setSelected] = useState(0);
  const [allVote, setAllVote] = useState(Array(anecdotes.length).fill(0));
  console.log(anecdotes.length);

  const randomGenerator = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVoteClick = () => {
    const setClick = [...allVote];
    setClick[selected] += 1;
    setAllVote(setClick);
  };

  return (
    <div className="App">
      <Heading text="Anecdotes of the Day" />
      <p> {anecdotes[selected]}</p>
      <p>has {allVote[selected]} votes</p>
      <Button onClick={handleVoteClick} text="Vote" />
      <Button onClick={randomGenerator} text="Next Anecdote" />
      <Heading text="Anecdotes with the most vote" />
      <MostVotes anecdotes={anecdotes} allVote={allVote} />
    </div>
  );
};
export default App;
