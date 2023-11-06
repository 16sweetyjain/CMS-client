import React, { Component } from 'react';

class HelpXForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subTitle: '',
      paragraph: '',
      image: '',
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
            name="name"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Subtitle:</label>
          <input
            type="email"
            name="email"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Paragraph:</label>
          <input
            type="email"
            name="email"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </div>


        <div>
          <label>Image:</label>
          <input
            type="email"
            name="email"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default HelpXForm;