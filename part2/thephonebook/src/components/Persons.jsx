import React from "react";
import Person from "./Person";

const Persons = (props) => {
  const { filterPerson } = props;
  return (
    <div>
      {filterPerson.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
};

export default Persons;
