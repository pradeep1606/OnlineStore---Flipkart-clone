import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
