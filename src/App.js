import './App.css';
import { BrowserRouter as Router, Switch, Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductListing from './components/productListing/ProductListing';
import ProductDetails from './components/productDetails/productDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Route path='/' exact component={ProductListing} />
        <Route path='/product/:productId' exact component={ProductDetails} />
        <Route>404 Not Found</Route>
      </Router>
    </div>
  );
}

export default App;
