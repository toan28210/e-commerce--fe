import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";
import { Switch } from "@mui/material";
import { useSelector } from "react-redux";


const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const user = false
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:category" element={<ProductList/>}></Route>
          <Route path="/product/:id" element={<Product/>} ></Route>
          <Route path="/cart" element={<Cart/>} ></Route>
          <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login/>}></Route>
          <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />}></Route>
        </Routes>
  </BrowserRouter>
    ) 
  };
  
  export default App;