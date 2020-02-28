import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";


import Home from "../Home";
import NotFound from "../NotFound";
import Signup from "../Signup";
import Login from "../Login";
import Navbar from "../../components/navbar.component";
import ExerciseList from "../../components/exercise-list.component";
import EditExercise from "../../components/edit-exercise.component";
import CreateExercise from "../../containers/exercise-form.container";
import CreateUser from "../../containers/user-form.container";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
      <Navbar />
      </div>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />

            <Route path="/" exact component={ExerciseList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
          </Switch>
        </header>
      </div>

    </Router>
  );
}

export default App;
