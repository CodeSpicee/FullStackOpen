import React from "react";

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercise[0].exercises +
          props.exercise[1].exercises +
          props.exercise[2].exercises}
      </p>
    </div>
  );
};

export default Total;
