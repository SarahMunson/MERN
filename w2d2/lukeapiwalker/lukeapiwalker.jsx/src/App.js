import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
}
from 'react-router-dom';
import { useParams } from 'react-router';
import People from './Components/People';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>

    <h1>Hello</h1>
    <label>Search for: </label>
    <select>
      <option selected hidden disabled>
      People
      </option>
    </select>
    <label>ID: </label>
    <input></input>
    <button>Search</button>
    <hr/>
    <label>Search for: </label>
    <select>
      <option selected hidden disabled>
      Planets
      </option>
    </select>
    <label>ID: </label>
    <input></input>
    <button>Search</button>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
