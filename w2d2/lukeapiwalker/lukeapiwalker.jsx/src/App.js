import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
}
  from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import Detail from './Components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className='App container'>
        <h1>Luke API Walker</h1>
        <SearchForm></SearchForm>
      </div>
      <Switch>
        <Route exact path = "/:category/:id">
          <Detail></Detail>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
