import React, { Component } from 'react';
import FaqForm from './components/FaqForm';
import HelpXForm from './components/HelpXForm';

class SelectSchemaDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'FAQ', // Set the default selected option
    };
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    return (
      <div>
        <label>Select a schema:</label>
        <select value={this.state.selectedOption} onChange={this.handleOptionChange}>
          <option value="FAQ">FAQ</option>
          <option value="HelpX">HelpX</option>
        </select>
        {this.state.selectedOption === 'FAQ' && <FaqForm/>}
        {this.state.selectedOption === 'HelpX' && <HelpXForm/>}
      </div>
    );
  }
}

export default SelectSchemaDropDown;