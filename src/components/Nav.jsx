
import { NavLink } from 'react-router-dom';
import { GiSkills } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineLaptop,
  AiOutlineRead,
} from 'react-icons/ai';

const Nav = () => {
  return (
    <div className=" border-2 border-gray-500
      fixed top-0 left-0 right-0 z-50
      bg-transparent bg-opacity-200 backdrop-blur-sm
      text-black  px-4 py-3 shadow-lg
      flex items-center justify-around rounded-full m-3 
    ">
      <p className="text-blue-500 text-2xl flex items-center justify-center font-black cursor-pointer" ><GiSkills className="text-blue-600 w-6 h-6 m-3 " />MentorConnect</p>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-xs font-medium transition-colors hover:scale-125 duration-200 ${
            isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`
        }
      >
        <AiOutlineHome className="w-6 h-6 mb-1" />
        Home
      </NavLink>

     <NavLink
        to="/explore"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-xs font-medium transition-colors hover:scale-125 duration-200 ${
            isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`
        }
      >
        <AiOutlineCompass className="w-6 h-6 mb-1" />
        Explore
      </NavLink>

      
      <NavLink
        to="/teach"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-xs font-medium transition-colors hover:scale-125 duration-200 ${
            isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`
        }
      >
        <AiOutlineLaptop className="w-6 h-6 mb-1" />
        Teach
      </NavLink>

      <NavLink
        to="/learn"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-xs font-medium transition-colors hover:scale-125 duration-200 ${
            isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`
        }
      >
        <AiOutlineRead className="w-6 h-6 mb-1" />
        Learn
      </NavLink>
       
        <NavLink
        to="/mentore"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-xs font-medium transition-colors hover:scale-125 duration-200 ${
            isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`
        }
      >
         <FaUser className="text-2xl" />
        Profile
      </NavLink>

    </div>
  );
};

export default Nav;
