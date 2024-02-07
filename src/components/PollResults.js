import React from 'react';
import './PollResults.css';

function PollResults({ question, options, votes }) {
  // Check if votes object is null or undefined
  if (!votes) {
    return null; // Return null if votes is null or undefined
  }

  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  // Check if options array is empty before finding the winner
  let winner = '';
  if (options.length > 0) {
    winner = Object.keys(votes).reduce((prev, curr) => (votes[curr] > votes[prev] ? curr : prev));
  }

  return (
    <div>
      <h2>Results</h2>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option.option}: {votes[option.option]} vote(s)</li>
        ))}
      </ul>
      <p>Total votes: {totalVotes}</p>
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
}

export default PollResults;
