import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data' ;
import Feature from './components/Feature';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <GlobalStyle /> 
      <Hero/>
      <Products heading='Our Special Pizzas' data={productData}/>
      <Feature />
      <Products heading='Sweet Desserts' data={productDataTwo}/>
      <Footer />
      
    </Router>
  );
}

export default App;
