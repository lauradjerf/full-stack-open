import React, { useState } from 'react';
import AddPersonForm from './components/AddPersonForm';
import People from './components/People';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [search, setSearch] = useState('');

  const filtered = persons.filter(person => person.name.toLowerCase().includes(search));

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} setSearch={setSearch} />
      <h2>Add new contact</h2>
      <AddPersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <People persons={search ? filtered : persons} />
    </div>
  );
};

export default App;
