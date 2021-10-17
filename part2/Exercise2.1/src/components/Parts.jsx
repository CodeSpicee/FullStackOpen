import React from "react";

const Parts = (props) => {
  const { name, exercises, id } = props.parts;
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

export default Parts;
