import React, { useState, useEffect } from 'react';
import {addFaqData, setFaqData} from '../actions/FaqFormActions';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../util/debounce';

import './Form.css';


const  FaqForm  = () =>  {
  const faqData = useSelector(state => state.faq);
  const [faqFormData, setFormData] = useState({
    title: faqData.title,
    description: faqData.description,
  }),
  dispatch = useDispatch();


  const handleInputChange = (e) => {
    setFormData({
      ...faqFormData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addFaqData(faqFormData));
  };

  const debouncedSubmit = debounce(handleSubmit, 500);


    return (
      <form className="my-form"  onSubmit={event => handleSubmit(event)}>
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
