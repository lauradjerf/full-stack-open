import React, { useState } from 'react';

const AddPersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        <label htmlFor="name">
          Name:
          <input id="name" value={newName} onChange={handlePersonChange} />
        </label>
      </div>
      <div>
        <label htmlFor="number">
          Number:
          <input id="number" value={newNumber} onChange={handleNumberChange} />
        </label>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;
