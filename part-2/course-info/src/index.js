import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

const Header = ({ course }) => (
  <div>
    <h1>{course.name}</h1>
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
        {'Number of exercises '}
        {sum}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
