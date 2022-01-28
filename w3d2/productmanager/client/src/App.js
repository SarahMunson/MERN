import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
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
          <Route exact path={'/product/edit/:id'}>
            <EditProduct></EditProduct>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
