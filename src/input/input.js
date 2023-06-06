import React, { useState } from 'react';
import './input.css'

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='container'>
      <label className='lbl' htmlFor="inputField">Label</label>
      <input
        className='inp'
        type="text"
        id="inputField"
        placeholder='Placeholder'
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Input;
