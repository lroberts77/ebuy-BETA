import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductListing from './components/ProductListing/ProductListing';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<ProductListing />} />
        <Route exact path='/product/:productId' element={<ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
