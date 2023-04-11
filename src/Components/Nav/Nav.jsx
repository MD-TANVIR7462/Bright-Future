import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <div>
         <div className="navbar bg-indigo-50 px-2 md:px-28  h-28">
 
         
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              <li><NavLink to={'/'} className={  ({ isActive }) => isActive ? 'text-pink-900' : 'text-black pl-4'}>Home</NavLink ></li>
              <li tabIndex={0}>
                <NavLink to={'bl'} className={({ isActive }) => isActive ? " text-pink-900" : "'text-black pl-4"}> Statistics</NavLink >

              </li>
              <li> <NavLink to={'/Applyjobs'} className={({ isActive }) => isActive ? " text-pink-900" : "'text-black  pl-4 "}> Applied Jobs</NavLink ></li>
              <li> <NavLink to={'cal'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "'text-black  pl-4 "}> Blog</NavLink></li>
            </ul>
          </div>
          <a className=" font-bold text-base md:text-3xl">Code<span className='text-pink-900'>Your</span>Career</a>
        </div>
        <div className="navbar-center hidden lg:flex text-xl ">
          <ul className="menu menu-horizontal  font-bold mx-5">
            <NavLink to={'/'} className={({ isActive }) => isActive ? ' text-pink-900 mr-3 ' : 'text-black mr-3'}>Home</NavLink>
            <NavLink to={'statis'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "text-black pl-4"}> Statistics</NavLink >
            <NavLink to={'/Applyjobs'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "'text-black  pl-4 "}> Applied Jobs</NavLink >
            <NavLink to={'Blog'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "'text-black  pl-4 "}>Blog</NavLink >
           
          </ul>
        </div>
        <div className="navbar-end">
       

<button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950">Star Applying</button>

        </div>
      
</div>
      </div>
   );
};

export default Nav;