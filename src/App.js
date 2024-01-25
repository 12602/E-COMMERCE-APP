import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProduct from './components/Product/GetProduct';
import Home from './components/Home/Home';
import NavBar from './components/Header/Navbar'
import Cart from './components/Cart/Cart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shipping from './components/Cart/Shipping';
import Categories from './components/Home/Categories';
import Orders from './components/Orders/Orders';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Search from './components/Home/Search';




function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Container>
          <ToastContainer />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="/product/:id" element={<GetProduct />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register/>} />
        
            <Route exact path="/shipping" element={<Shipping />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="search" element={<Search />} />
          
          </Routes>

        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
