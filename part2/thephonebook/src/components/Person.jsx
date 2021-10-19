import React from "react";

const Person = ({ person }) => 
  return (
    <div className="Person">
      <span>{person.name}</span>
      <span>{person.number}</span>
    </div>
  );
};

export default Person;
