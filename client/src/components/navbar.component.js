import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './input.component';
import Button from './button.component';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExerciseTracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Log Exercise</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create Account</Link>
            </li>
          </ul>
        </div>
        <form className="form-inline float-right">
          <Input className={"form-control mr-sm-2"}
                 type={"search"}
                 placeholder={"Search"}
                 aria-label="Search"
                 />
          <Button className={"btn btn-primary my-2 my-sm-0"}
                  type={"submit"}
                  value={"Search"}
                  title={"Search"}
                  />
        </form>
      </nav>
    )
  }
};
