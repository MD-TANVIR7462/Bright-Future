import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className=''>
    <Nav></Nav>
    <Outlet></Outlet>
    </div>
  );
};

export default App;
