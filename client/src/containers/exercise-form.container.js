import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

import Select from '../components/select.component';
import Input from '../components/input.component';
import Button from '../components/button.component';

export default class CreateExercise extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/users')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));
      ``
    window.location = '/';
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
       [name]: value
     })
  }

  render() {
    return (
      <div>
       <h3>Log Exercise</h3>
       <form className="container-fluid" onSubmit={this.onSubmit}>
        <div className="form-group">
          <Select title={"Select Username:"}
                  name={"username"}
                  options={this.state.users}
                  value={this.state.username}
                  placeholder={"Select User"}
                  handleChange={this.handleInput}
          />
        </div>
        {/*Input Description*/}
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
              required
              className="form-control"
              name={"description"}
              value={this.state.description}
              onChange={this.handleInput}
              />
        </div>
        <Input
        />
        {/*Input Duration*/}
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            name={"duration"}
            value={this.state.duration}
            onChange={this.handleInput}
            />
          <Input name={"duration"}
                 type={"text"}
                 title={"Duration (in minutes):"}
                 value={this.state.duration}
                 placeholder={"Enter Duration"}
                 handleChange={this.handleInput}
                 className={"form-control"}
          />
        </div>
        {/*Select Date*/}
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              name={"date"}
              selected={this.state.date}
              onChange={this.handleInput}
              />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Log Exercise" className="btn btn-primary" />
        </div>

       </form>
      </div>
    )
  }
};
