// QuestionForm.js
import React, { useState } from 'react';
import './QuestionForm.css'

function QuestionForm({ onSubmit }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      
    </form>
  );
}

export default QuestionForm;
