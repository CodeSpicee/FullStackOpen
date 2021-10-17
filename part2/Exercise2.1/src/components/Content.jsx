import React from "react";
import Parts from "./Parts";

const Content = (props) => {
  const { part } = props;
  const { name, exercises, id } = part;
  return (
    <div>
      {part.map((part) => {
        return (
          <div key={id}>
            <Parts parts={part} />
          </div>
        );
      })}
      <h4>Total of {part.reduce((acc, cur) => acc + cur.exercises, 0)} </h4>
    </div>
  );
};
export default Content;
