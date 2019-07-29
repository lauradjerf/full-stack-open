import React, { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };

    if (!persons.some(name => name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName('');
  };

  const rows = () =>
    persons.map(person => <Person key={person.name} person={person} />);

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
