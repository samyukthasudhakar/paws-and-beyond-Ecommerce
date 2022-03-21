import { Routes, Route } from "react-router-dom";

import './styles/App.css';
import { CartPage, HomePage, Login, ProductListing, PageNotFound, SignUp, WishListPage } from './pages'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div> 
  );
}

export default App;
