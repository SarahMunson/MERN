import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Id from './Components/String';
import CustomPath from './Components/CustomPath';


function App() {
  return (
    <BrowserRouter>
      <Link to='/home'>Home</Link>
      <Switch>
        <Route exact path="/home">
          {console.log("homepage")}
          <h1>Welcome to the Home Page</h1>
        </Route>
        <Route exact path="/:id">
          <Id/>
        </Route>
        <Route exact path="/:id/:bgColor/:textColor">
          <CustomPath/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
