import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/listed-books'><li><a>Listed Books</a></li></Link>
        <Link to='/listed-books'><li><a>Pages to Read</a></li></Link>
        
    </>
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
              <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  
                  {links}

                </ul>
              </div>
              <Link to='/'><a className="btn btn-ghost text-xl">Book Shelf</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links}
              </ul>
            </div>
            <div className="navbar-end gap-4">
              <a className="btn bg-[#23BE0A] text-white rounded-xl px-7 py-5">Sign In</a>
              <a className="btn bg-[#59C6D2] text-white rounded-xl px-7 py-5">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;