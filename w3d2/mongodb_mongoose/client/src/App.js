import './App.css';
import './components/NewNinjaForm'
import React, {useState} from 'react';
import NewNinjaForm from './components/NewNinjaForm';
import AllNinjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';
import EditNinja from './components/EditNinja';
import {
  BrowserRouter, //so the application knows we can do routing
  Switch,
  Route,
  Link
} from "react-router-dom";

/* 
collect info from form
    -state variables for form info
    -onchange
when form submits, send post request using axios with the form info to create something new 
 */

function App() {
  let [newNinjaAdded, setNewNinjaAdded] = useState(false)

  return (
    <BrowserRouter>
      <div className='App container'>
        <h1>Ninja's Belt Reviewer</h1>
        <Link to = "/new" className='btn btn-secondary'>Add Ninja</Link>
        <Switch>
          <Route exact path="/">
            <NewNinjaForm newNinjaAdded = {newNinjaAdded} setNewNinjaAdded = {setNewNinjaAdded}></NewNinjaForm>
            <hr />
            <AllNinjas newNinjaAdded = {newNinjaAdded}></AllNinjas>
          </Route>
          <Route exact path ="/new"></Route>

          <Route exact path="/ninjas/:id">
            <OneNinja></OneNinja>
          </Route>

          <Route exact path="/ninjas/edit/:id">
            <EditNinja></EditNinja>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
