import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './Components/ProductDetails';
import ProductForm from './Components/ProductForm';
import ProductsList from './Components/ProductList';
import About from './Pages/About';
import Home from './Pages/Home';
import Products from './Pages/Products';
import SearchResults from './Components/SearchResults';
import './Sass/customStyle.css'
import Main from './Pages/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route index element={<ProductsList />} />
            <Route path="add" element={<ProductForm />} />
            <Route path=":productId/edit" element={<ProductForm />} />
            <Route path=":productId" element={<ProductDetails />} />
            <Route path="search" element={<SearchResults />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
