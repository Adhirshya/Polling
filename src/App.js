import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import OptionsForm from './components/OptionsForm';
import SubmitButton from './components/SubmitButton';
import PollResults from './components/PollResults';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [votes, setVotes] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleQuestionSubmit = (question) => {
    setQuestion(question);
  };

  const handleOptionsSubmit = (options) => {
    setOptions(options);
    const initialVotes = {};
    options.forEach(option => {
      initialVotes[option.option] = 0; // Use option.option as the key for votes
    });
    setVotes(initialVotes);
  };

  const handleVote = (option) => {
    setVotes(prevVotes => {
      const updatedVotes = { ...prevVotes };
      updatedVotes[option] += 1; // Use option as the key for votes
      return updatedVotes;
    });
  };

  const handleEndPoll = () => {
    setShowResults(true);
  };

  return (
    <div className="container">
      <h1>Polling App</h1>
      {!showResults ? (
        <>
          <QuestionForm onSubmit={handleQuestionSubmit} />
          <OptionsForm onSubmit={handleOptionsSubmit} />
          {options.map((option, index) => (
            <button key={index} onClick={() => handleVote(option.option)}>Vote for {option.option}</button>
          ))}
          <SubmitButton onClick={handleEndPoll} />
        </>
      ) : (
        <PollResults question={question} options={options} votes={votes} /> // Pass votes as prop to PollResults
      )}
    </div>
  );
}

export default App;
