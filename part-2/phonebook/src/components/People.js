import React from 'react';
import Person from './Person';

const People = ({ persons }) => {
  const rows = () => persons.map(person => <Person key={person.name} person={person} />);
  return <ul>{rows()}</ul>;
};

export default People;
