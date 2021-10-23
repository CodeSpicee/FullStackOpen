import React from "react";
import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Persons from "./components/Persons";

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
  const [searchQuery, setSearchQuery] = useState("");

  const handleNewPerson = (e) => {
    setNewPerson(e.target.value);
  };

  const handleFilter = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const addPerson = (e) => {
    e.preventDefault();
    if (!newPerson && !newNumber) {
      return alert("You need to enter your name and number");
    }
    const personObject = [
      {
        name: newPerson,
        number: newNumber,
        id: persons.length + 1,
      },
    ];
    if (newPerson.trim() && newNumber.trim() === "") return;
    if (
      persons.find(
        (person) => person.name.toLowerCase() === newPerson.toLowerCase()
      )
    ) {
      alert(`${newPerson} is already added to the phonebook`);
      setNewPerson("");
      setNewNumber("");
      return;
    }
    setPerson([...persons, ...personObject]);
    setNewPerson("");
    setNewNumber("");
  };
  const filterPerson = searchQuery.trim()
    ? persons.filter(
        (person) =>
          person.name.toLowerCase().includes(searchQuery) ||
          String(person.number).includes(searchQuery)
      )
    : persons;

  return (
    <div className="App">
      <Heading title="Phonebook" />
      <Filter value={searchQuery} onChange={handleFilter} />
      <Heading title="Add a New Contact" />
      <Form
        onSubmit={addPerson}
        value={newPerson}
        value1={newNumber}
        onChange1={handleNewNumber}
        onChange={handleNewPerson}
        text="Add"
      />
      <Heading title="Numbers" />
      <Persons filterPerson={filterPerson} />
    </div>
  );
};

export default App;
