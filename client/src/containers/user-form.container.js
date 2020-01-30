import React, { Component } from 'react';
import axios from 'axios';

import Input from '../components/input.component';
import Select from '../components/select.component';
import Button from '../components/button.component';

export default class UserFormContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      pressed: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
  
    this.setState({
       [name]: value
     })
  }

  handleClick(e) {
    this.setState({
      pressed: !this.state.pressed
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  };


  render() {
    return (
      <div>
        <h3>Create Account</h3>
        <form className={"container-fluid"} onSubmit={this.onSubmit}>
          <Input name={"username"}
                 type={"text"}
                 title={"Username: "}
                 value={this.state.username}
                 placeholder={"Enter Your Username"}
                 handleChange={this.handleInput}
                 />
          <Button type={"submit"}
                  value={"Sign Up"}
                  className={"btn btn-primary btn-lg"}
                  dataToggle={"button"}
                  ariaPressed={this.state.pressed}
                  onClick={this.handleClick}
                  title={"Sign Up"}
                  />
        </form>
      </div>
    )
  };
};
