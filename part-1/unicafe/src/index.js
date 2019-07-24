import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Heading = ({ heading }) => <h1>{heading}</h1>;

const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const Statistics = ({ text, value }) => (
  <p>
    {text}
    {' '}
    {value}
  </p>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log(good);
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
      <Statistics text="Good" value={good} />
      <Statistics text="Neutral" value={neutral} />
      <Statistics text="Bad" value={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
