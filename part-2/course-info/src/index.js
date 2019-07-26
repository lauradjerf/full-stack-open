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

const App = () => {
  const courses = [
    {
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
      id: 1,
    },
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
      id: 2,
    },
  ];

  return (
    <div>
      <h1>Web development Curriculum</h1>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
