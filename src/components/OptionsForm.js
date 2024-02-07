import React, { useState } from 'react';
import './OptionsForm.css';

function OptionsForm({ onSubmit }) {
  const [options, setOptions] = useState([{ option: '', votes: 0 }]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], option: value };
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions(prevOptions => [...prevOptions, { option: '', votes: 0 }]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(options);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Options:</label>
        {options.map((option, index) => (
          <div key={index}>
            <input type="text" value={option.option} onChange={(e) => handleOptionChange(index, e.target.value)} />
           
            <button type="button" onClick={() => handleRemoveOption(index)}>-</button>
            
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>+</button>
      </div>
      <button type="submit">Submit Options</button>
    </form>
  );
}

export default OptionsForm;
