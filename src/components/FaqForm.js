import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a server or perform some action.
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;