import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProduct from './components/GetProduct';
import Home from './components/Home';
import NavBar from './components/NavBar'

import Cart from './components/Cart';
import Auth from './components/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shipping from './components/Shipping';
import Categories from './components/Categories';
import Orders from './components/Orders';
import { format } from 'timeago.js';

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
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/shipping" element={<Shipping />} />
            <Route exact path="/categories" element={<Categories />} />
          </Routes>

        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
