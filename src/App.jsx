import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Components/footer/Footer';

const App = () => {
  return (
    <div>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default App;
