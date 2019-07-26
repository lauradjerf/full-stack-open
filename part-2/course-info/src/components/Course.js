import React from 'react';

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

const Header = ({ course }) => (
  <div>
    <h2>{course.name}</h2>
  </div>
);

const Part = ({ part, exercises }) => (
  <p>
    {part}
    {' '}
    {exercises}
  </p>
);

const Content = ({ parts }) => {
  const rows = () => parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />);
  return <div>{rows()}</div>;
};

const Total = ({ parts }) => {
  const amounts = parts.map(part => part.exercises);
  const sum = amounts.reduce((total, amount) => total + amount);
  return (
    <div>
      <p>
        <b>
          {'Number of exercises '}
          {sum}
        </b>
      </p>
    </div>
  );
};

export default Course;
