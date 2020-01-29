import React, { Component } from 'react';
import axios from 'axios';

import Input from '../components/input.component';
import Select from '../components/select.component';
import Button from '../components/button.component';

export default class UserFormContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: ''
    }

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
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
          <Input type={"text"}
                 title={"Username: "}
                 value={this.state.username}
                 placeholder={"Enter Your Username"}
                 handleChange={this.onChangeUsername}
                 />
          <Input type={"submit"} value={"Sign Up"} className={"btn btn-primary"} />
          <Button />
        </form>
      </div>
    )
  };
};
