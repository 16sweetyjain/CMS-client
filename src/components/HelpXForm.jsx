import React, { useState, useEffect } from 'react';
import {addHelpXData, setHelpXData} from '../actions/HelpXFormActions';
import { useDispatch, useSelector } from 'react-redux';

const HelpXForm = () => {
  const helpXData = useSelector(state => state.helpX);
  const [helpXFormData, setFormData] = useState({
    title: helpXData.title,
    subtitle: helpXData.subtitle,
    paragraph: helpXData.paragraph,
    imageURL: helpXData.imageURL,
    imageAtlText: helpXData.title.imageAtlText
  }),
  dispatch = useDispatch();


  useEffect(() => {
    // Retrieve form data from localStorage when the component mounts
    const storedFormData = localStorage.getItem('helpXFormData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []); // Empty dependency array to run this effect only once

  const handleInputChange = (e) => {
    setFormData({
      ...helpXFormData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setHelpXData(helpXFormData));

    dispatch(addHelpXData());

    localStorage.setItem('helpXFormData', helpXFormData);

    // Handle form submission, e.g., send data to a server or perform some action.
  };


    return (
      <form onSubmit={handleSubmit()}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="name"
            value={helpXFormData.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
        <label> SubTitle: </label>
        <input
          type="text"
          name="subtitle"
          value={helpXFormData.subtitle}
          onChange={handleInputChange}
        />
      </div>

        <div>
          <label>Paragraph:</label>
          <input
            type="text"
            name="paragraph"
            value={helpXFormData.paragraph}
            onChange={handleInputChange}
          />
        </div>


        <div>
          <label>Image URL :</label>
          <input
            type="text"
            name="imageURL"
            value={helpXFormData.imageURL}
            onChange={handleInputChange}
          />
        </div>

        <div>
        <label>Image Alt Text :</label>
        <input
          type="text"
          name="imageAtlText"
          value={helpXFormData.imageAtlText}
          onChange={handleInputChange}
        />
      </div>
        <button type="submit">Submit</button>
      </form>
    );
}

export default HelpXForm;