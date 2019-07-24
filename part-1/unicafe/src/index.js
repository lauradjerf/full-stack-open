import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Heading = ({ heading }) => <h1>{heading}</h1>;

const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const StatisticItem = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const StatisticList = ({ good, neutral, bad }) => {
  const count = good + neutral + bad;

  if (count === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / count;
  const positive = `${(good / count) * 100}%`;
  return (
    <table>
      <tbody>
        <StatisticItem text="Good" value={good} />
        <StatisticItem text="Neutral" value={neutral} />
        <StatisticItem text="Bad" value={bad} />
        <StatisticItem text="All" value={count} />
        <StatisticItem text="Average" value={average} />
        <StatisticItem text="Positive" value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Heading heading="Give Feedback" />
      <Button text="Good" onClick={handleGoodClick} />
      <Button text="Neutral" onClick={handleNeutralClick} />
      <Button text="Bad" onClick={handleBadClick} />
      <Heading heading="Statistics" />
      <StatisticList good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
