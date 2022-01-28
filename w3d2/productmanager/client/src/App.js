import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
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
        <Switch>
          <Route exact path='/'>
            <ProductForm></ProductForm>
            <AllProducts></AllProducts>
          </Route>
          <Route exact path='/productdetails/:id'>
            <OneProduct></OneProduct>
          </Route> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
