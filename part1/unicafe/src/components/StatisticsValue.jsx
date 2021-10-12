import React from "react";
import Statistics from "./Statistics";

const StatisticsValue = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const percentage = (good / total) * 100;
  const average = (good - bad) / total;

  if (total === 0) return <p>No Feedback Yet</p>;
  return (
    <div>
      <h1>Statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="All" value={total} />
      <Statistics text="average" value={average} />
      <Statistics text="percentage" value={percentage + "%"} />
    </div>
  );
};

export default StatisticsValue;
