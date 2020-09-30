import React, { Component } from 'react';
import Form from './Form/Form';
import Filters from './Filters/Filters';
import BookResults from './BookResults/BookResults'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      input: '',
      printType: ["all", "books", "magazines"],
      filters:["partial", "full", "free-ebooks", "paid-ebooks", "ebooks"],
      printTypeSelected: "all",
      filterSelected: null,
    };
  }

  //is passed down to filter.js to process user selected options 
  setSelected(selected) {
    this.setState({
      selected
    });
  }

  handlePrintTypeChange = (selected) => {
    this.setState({
      printTypeSelected: selected
    });
  }

  handleFilterChange = (selected) => {
    this.setState({
      filterSelected: selected
    });
  }

  //handles user text input in Form.js
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  //fetches api info using user input
  handleSubmit = (e) => {
    const queryString = spaceConverter(this.state.input);
    const apiKey = "AIzaSyBU9yPGQW8OERUs_UCoiW2AckgyHP992sQ"
    const searchURL = 'https://www.googleapis.com/books/v1/volumes';
    const filterSelection = this.state.filterSelected;
    const printTypeSelection = this.state.printTypeSelected
    const url = `${searchURL}?q=${queryString}&printType=${printTypeSelection}&key=${apiKey}`;
    const urlWithFilters = urlFiltersQuery(url);

    function urlFiltersQuery(urlInput) {
      debugger;
      console.log(url);
      if (filterSelection != null) {
        return (
          `${searchURL}?q=${queryString}&filter=${filterSelection}&printType=${printTypeSelection}&key=${apiKey}`
        )
      }
      else {
        return (
          `${url}`
        )
      }
    }

    function spaceConverter(u_input) {
      let convertedString = u_input.split(' ').join('+');;
      return convertedString;
    }
    
    fetch(urlWithFilters)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

    e.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <h1 className="app_header">Google Book Search</h1>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <Filters 
          handlePrintTypeChange={this.handlePrintTypeChange}
          handleSubmit={this.handleSubmit}
          handleFilterChange={this.handleFilterChange}
          printTypeData={this.state.printType}
          FilterData={this.state.filters} />
        <BookResults
          bookData={this.state.books} />
      </div>
    );
  }
}

export default App;



