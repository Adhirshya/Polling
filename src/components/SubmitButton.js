// SubmitButton.js
import React from 'react';

function SubmitButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>End Poll</button>
    </div>
  );
}

export default SubmitButton;
