import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useParams } from 'react-router';
import './App.css';

function App() {
  const { string, id, bgColor, textColor } = useParams();

  const Home = () => {
    return (
      <p>
        Welcome to the Home Page
      </p>
    )
  }

  const IdPath = () => {
    return (
      <p>
        Welcome!
        The number is {id}
      </p>
    )
  }

  const StringPath = () => {
    return (
      <p>
            Welcome! The word is {string}
          </p>
    )
  }

  const CustomPath = () => {
    return (
      <div style={{ backgroundColor: ` ${bgColor} `, textColor: `${textColor}` }}>
            <h1>
              Hello
            </h1>

          </div>
    )
  }

  return (
    <BrowserRouter>
      <Link to='/home'>Home</Link>
      <Switch>
        <Route exact path="/home">
          {console.log("homepage")}
          <Home/>
        </Route>
        <Route exact path="/:id">
          <IdPath/>
        </Route>
        <Route exact path="/:string">
            <StringPath/>
        </Route>
        <Route exact path="/:string/:bgColor/:textColor">
          <CustomPath/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
