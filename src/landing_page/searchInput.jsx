import React, { useState } from 'react';
import './SearchInput.css'; // Your CSS file

const SearchInput = ({ onGenerate }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGenerateClick = () => {
    onGenerate(input);
  };

  return (
    <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt..."
        />
        <button className="generate-button" onClick={handleGenerateClick}>
          Generate
        </button>
    </div>
  );
};

export default SearchInput;
