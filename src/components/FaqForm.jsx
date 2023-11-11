import React, { useState, useEffect } from 'react';
import {addFaqData, setFaqData} from '../actions/FaqFormActions';
import { useDispatch, useSelector } from 'react-redux';


const  FaqForm  = () =>  {
  const faqData = useSelector(state => state.faq);
  const [faqFormData, setFormData] = useState({
    title: faqData.title,
    subtitle: faqData.subtitle,
  }),
  dispatch = useDispatch();

  useEffect(() => {
    // Retrieve form data from localStorage when the component mounts
    const storedFormData = localStorage.getItem('faqFormData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []); // Empty dependency array to run this effect only once

  const handleInputChange = (e) => {
    setFormData({
      ...faqFormData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setFaqData(faqFormData));

    dispatch(addFaqData());
  };


    return (
      <form onSubmit={handleSubmit()}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={faqFormData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            name="description"
            value={faqFormData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

export default FaqForm;
