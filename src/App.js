
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import TestimonialCard from './components/Testimonia';
import FAQSection from './components/FAQ';
import Footer from './components/footer';
import BlogList from './components/BlogList';
import HorizontalTabBar from './components/HorizontalTabBar';
const App = () =>(
 
  <Router>
    <NavBar/>
    <HorizontalTabBar/>
    <Routes>
      <Route path="/"  element={<ProductList />}/>
      
    </Routes>
    <BlogList/>
   <TestimonialCard/> <br></br><br></br>
   <FAQSection/>
   <Footer/>
  </Router>
);

export default App;

