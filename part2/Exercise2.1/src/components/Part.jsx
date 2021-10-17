import React from "react";

const Part = (props) => {
  const { name, number } = props;
  return (
    <div>
      <p>
        {name} {number}
      </p>
    </div>
  );
};

export default Part;
