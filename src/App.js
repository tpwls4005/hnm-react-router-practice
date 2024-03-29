import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<ProductAll/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}


export default App;
