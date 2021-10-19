import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Person from "./components/Person";

const App = () => {
  const [persons, setPerson] = useState([
    { name: "Arthuro Rahmon", number: "040-123456", id: 1 },
    { name: "Ajala Abdul Samii", number: "08076375674", id: 2 },
    { name: "Oriyomi Ajanlekoko", number: "07098567489", id: 3 },
    { name: "Sulaimon Bolodeoku", number: "08123467890", id: 4 },
  ]);
  // console.log(persons);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNewPerson = (e) => {
    setNewPerson(e.target.value);
  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const addPerson = (e) => {
    e.preventDefault();
    const personObject = [
      {
        name: newPerson,
        number: newNumber,
        id: persons.length + 1,
      },
    ];
    if (newPerson.trim() && newNumber.trim() === "") return;
    setPerson([...persons, ...personObject]);
    setNewPerson("");
    setNewNumber("");
  };
  return (
    <div className="App">
      <Heading title="Phonebook" />

      <Heading title="Add a New Contact" />
      <Form
        onSubmit={addPerson}
        value={newPerson}
        value1={newNumber}
        onChange1={handleNewNumber}
        onChange={handleNewPerson}
        text="Add"
      />

      <div>
        <Heading title="Number" />
        {persons.map((person) => {
          console.log(person);
          return <Person key={person.id} person={person} />;
        })}
      </div>
    </div>
  );
};

export default App;
