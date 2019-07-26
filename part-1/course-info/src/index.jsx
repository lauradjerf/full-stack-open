import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
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

// const Total = props => (
//   <div>
//     <p>
//       {'Number of exercises '}
//       {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//     </p>
//   </div>
// );

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
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
