import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const  Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    navigate(`/${event.target.value}`);
  };


    return (
      <div>
        <label>Select a schema:</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="FAQ">FAQ</option>
          <option value="HelpX">HelpX</option>
        </select>
      </div>
    );
}

export default Dashboard;