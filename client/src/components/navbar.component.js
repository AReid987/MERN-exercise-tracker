import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './input.component';
import Button from './button.component';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default class NavbarPage extends Component {
  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">Exercise Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav>
            <Link to="/exercises" className="nav-link">Exercises</Link>
          </Nav>
          <Nav>
            <Link to="/create" className="nav-link">Log Exercise</Link>
          </Nav>
          <Nav>
            <Link to="/signup" className="nav-link">Create Account</Link>
          </Nav>
          <Nav>
            <Link to="/login" className="nav-link">Login</Link>
          </Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
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
      </Navbar.Collapse>
    </Navbar>
  </div>
    )
  }
};
