import React from 'react';

const Nav = () => {
   return (
      <div>
         <div className="navbar bg-indigo-50 md:px-28 ">
 
         
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              <li><a className={  ({ isActive }) => isActive ? 'text-blue-800' : 'text-black pl-4'}>Home</a></li>
              <li tabIndex={0}>
                <a className={({ isActive }) => isActive ? "text-blue-800" : "'text-black pl-4"}> Statistics</a>

              </li>
              <li> <a className={({ isActive }) => isActive ? "text-blue-800" : "'text-black  pl-4 "}> Applied Jobs</a></li>
              <li> <a className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "'text-black  pl-4 "}> Blog</a></li>
            </ul>
          </div>
          <a className=" font-bold text-base md:text-xl">Code<span className='text-pink-700'>Your</span>Career</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal  font-bold mx-5">
            <a className={({ isActive }) => isActive ? 'text-blue-800' : 'text-black pl-4'}>Home</a>
            <a className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "text-black pl-4"}> Statistics</a>
            <a className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "'text-black  pl-4 "}> Applied Jobs</a>
            <a className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "'text-black  pl-4 "}>Blog</a>
           
          </ul>
        </div>
        <div className="navbar-end">
       
<button className="btn btn-active btn-primary">Star Applying</button>

        </div>
      
</div>
      </div>
   );
};

export default Nav;