import './App.css';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import NewAuthorForm from './components/NewAuthorForm';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1 className='container'>Favorite authors</h1>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <Link to="/new">Add an author</Link>
          </div>
          <AllAuthors></AllAuthors>
        </Route>
        <Route exact path='/new'>
          <NewAuthorForm></NewAuthorForm>
        </Route>
        <Route exact path='/edit/:id'>
          <EditAuthor></EditAuthor>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
