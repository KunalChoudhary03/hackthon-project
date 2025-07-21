import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiSkills } from 'react-icons/gi';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineLaptop,
  AiOutlineRead,
} from 'react-icons/ai';

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navLinks = [
    { to: '/', label: 'Home', icon: <AiOutlineHome className="w-6 h-6 mb-1" /> },
    { to: '/explore', label: 'Explore', icon: <AiOutlineCompass className="w-6 h-6 mb-1" /> },
    { to: '/teach', label: 'Teach', icon: <AiOutlineLaptop className="w-6 h-6 mb-1" /> },
    { to: '/learn', label: 'Learn', icon: <AiOutlineRead className="w-6 h-6 mb-1" /> },
    { to: '/mentore', label: 'Profile', icon: <FaUser className="w-6 h-6 mb-1" /> },
  ];

  return (
    <>
      
      <div className=" mt-4 fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-600 text-white px-4 py-3 shadow-md flex items-center justify-between sm:justify-around rounded-4xl">
        <p className="text-blue-500 text-xl flex items-center font-black cursor-pointer">
          <GiSkills className="text-blue-600 w-6 h-6 mr-2" />
          MentorConnect
        </p>

    
       <div className="hidden sm:flex items-center space-x-10 gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs font-medium transition hover:scale-110 duration-200 ${
                  isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-400'
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>

        <button onClick={toggleDrawer} className="sm:hidden text-white text-2xl">
          {drawerOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/95 backdrop-blur-lg border-r border-gray-700 p-6 z-40 transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden`}
      >
        <p className="text-blue-500 text-xl mb-6 flex items-center font-black">
          <GiSkills className="text-blue-600 w-6 h-6 mr-2" />
          MentorConnect
        </p>
        <div className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={() => setDrawerOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 text-sm font-medium transition hover:scale-105 duration-200 ${
                  isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-300'
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
