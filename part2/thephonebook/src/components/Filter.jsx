import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <div>
        Filter shown with
        <input value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Filter;
