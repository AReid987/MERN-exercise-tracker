import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Select from '../components/select.component';
import Input from '../components/input.component';
import Button from '../components/button.component';


export default class CreateExercise extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
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
    this.setState({
      users: ['test user', 'some other person'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
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
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        {/*Input Duration*/}
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={this.state.duration}
            onChange={this.onChangeDuration}
            />
        </div>
        {/*Select Date*/}
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
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
