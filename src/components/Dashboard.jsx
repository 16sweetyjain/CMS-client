import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const  Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('default');
  const navigate = useNavigate();
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    navigate(`/${event.target.value}`);
  };


    return (
      <div>
        <label>Select a schema:</label>
        <select value={selectedOption} onChange={handleOptionChange}>
        <option value="default">Select an option</option>
          <option value="faq">FAQ</option>
          <option value="helpX">HelpX</option>
        </select>
      </div>
    );
}

export default Dashboard;