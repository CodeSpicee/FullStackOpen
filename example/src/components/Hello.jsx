import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you're {props.age} years old
      </p>
    </div>
  );
};

export default Hello;
