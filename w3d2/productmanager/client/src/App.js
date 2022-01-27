import './App.css';
import ProductForm from './components/ProductForm';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App container'>
      <Route exact path= "/">
        <ProductForm></ProductForm>
      </Route>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
