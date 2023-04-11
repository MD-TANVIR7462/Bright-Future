import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faChartSimple,faPersonChalkboard,faBlog } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
   return (
      <div >
         <div className="navbar bg-indigo-50 px-2 md:px-28  h-28">
 
         
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              <li><NavLink to={'/'} className={  ({ isActive }) => isActive ? 'text-pink-900' : 'text-black pl-4'}> <FontAwesomeIcon icon={faHome} />  Home</NavLink ></li>
              <li tabIndex={0}>
                <NavLink to={'/statics'} className={({ isActive }) => isActive ? " text-pink-900" : "'text-black pl-4"}>  <FontAwesomeIcon icon={faChartSimple} /> Statistics</NavLink >

              </li>
              <li> <NavLink to={'/Applyjobs'} className={({ isActive }) => isActive ? " text-pink-900" : "'text-black  pl-4 "}> <FontAwesomeIcon icon={faPersonChalkboard} />  Applied Jobs</NavLink ></li>
              <li> <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "'text-black  pl-4 "}>  <FontAwesomeIcon icon={faBlog} /> Blog</NavLink></li>
            </ul>
          </div>
          <Link to={'/'} className=" font-bold  text-base md:text-3xl"><span className='text-pink-900'>Bright</span>Future</Link>
        </div>
        <div className="navbar-center hidden lg:flex text-lg ">
          <ul className="menu menu-horizontal  font-bold mx-5">
            <NavLink to={'/'} className={({ isActive }) => isActive ? ' text-pink-900 mr-5 ' : 'text-black mr-5'}><FontAwesomeIcon icon={faHome} /> Home</NavLink>
            <NavLink to={'/statics'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "text-black pl-5"}>  <FontAwesomeIcon icon={faChartSimple} /> Statistics</NavLink >
            <NavLink to={'/Applyjobs'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "'text-black  pl-5 "}>  <FontAwesomeIcon icon={faPersonChalkboard} /> Applied Jobs</NavLink >
            <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? " text-pink-900 pl-4" : "'text-black  pl-5 "}> <FontAwesomeIcon icon={faBlog} /> Blog</NavLink >
           
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