import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="landing_form">
        <label htmlFor="Search">Enter a book title</label>
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder="Search" 
          onChange={this.props.handleChange} />
        <div className="Sea__buttons">
          <button type="submit" >Search</button>
        </div>
      </form>
    );
  }
}

export default Form;