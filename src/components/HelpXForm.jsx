import React, { useState, useEffect } from 'react';
import {addHelpXData, setHelpXData} from '../actions/HelpXFormActions';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../util/debounce';
import './Form.css';

const HelpXForm = () => {
  const helpXData = useSelector(state => state.helpX);
  const [helpXFormData, setFormData] = useState({
    title: helpXData.title,
    subtitle: helpXData.subtitle,
    paragraph: helpXData.paragraph,
    imageURL: helpXData.imageURL,
    imageAtlText: helpXData.imageAtlText
  }),
  dispatch = useDispatch();


  const handleInputChange = (e) => {
    setFormData({
      ...helpXFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addHelpXData(helpXFormData));
  };

  const debouncedSubmit = debounce(handleSubmit, 500);


    return (
      <form className="my-form" onSubmit={event => handleSubmit(event)}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
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