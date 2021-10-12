import React from "react";
import { useState } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import StatisticsValue from "./components/StatisticsValue";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodClick = () => setGood(good + 1);
  const setNeutralClick = () => setNeutral(neutral + 1);
  const setBadClick = () => setBad(bad + 1);

  return (
    <div className="App">
      <Heading heading="Give Feedback" />
      <Button onClick={setGoodClick} text="Good" />
      <Button onClick={setNeutralClick} text="Neutral" />
      <Button onClick={setBadClick} text="Bad" />
      <StatisticsValue good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
