import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
import ToggleDisplay from 'react-toggle-display';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name:'',
      age:'',
      nickname:'',
      items: [],
      show: false
    }

  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      name: this.state.name,
      age: this.state.age,
      nickname: this.state.nickname
    });

    this.setState({
      items,
      name: '',
      age: '',
      nickname: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render(){
    return (
      <div className="App">
        <div class="container">
        <br/>
        <Table items={this.state.items}/>
        <br/>
        <div class="text-left">
          <button onClick={ () => this.handleClick() } class="btn btn-default">Add</button>
          <br/>
          <br/>
          <ToggleDisplay show={this.state.show}>
              <Form handleFormSubmit = {this.handleFormSubmit}
        			  handleInputChange = {this.handleInputChange}
        			  newName = {this.state.name}
        			  newAge = {this.state.age}
        			  newNickname = {this.state.nickname}/>
          </ToggleDisplay>

          <ToggleDisplay if={this.state.show} tag="section">
          </ToggleDisplay>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
