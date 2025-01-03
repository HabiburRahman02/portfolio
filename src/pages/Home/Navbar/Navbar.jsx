import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars4 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDarkTheme = () => {
    document.documentElement.classList.toggle('dark')
  }
  const links = (
    <>
      <NavLink className={({ isActive }) => `text-xl mr-8 ${isActive && 'border-b-2 border-b-white'}`} to='/'>Home</NavLink>
      <NavLink className={({ isActive }) => `text-xl mr-8 ${isActive && 'border-b-2 border-b-white'}`} to='/aboutMe'>About</NavLink>
      <NavLink className={({ isActive }) => `text-xl mr-8 ${isActive && 'border-b-2 border-b-white'}`} to='/skills'>Skills</NavLink>
      <NavLink className={({ isActive }) => `text-xl mr-8 ${isActive && 'border-b-2 border-b-white'}`} to='/projects'>Projects</NavLink>
      <NavLink className={({ isActive }) => `text-xl mr-8 ${isActive && 'border-b-2 border-b-white'}`} to='/education'>Education</NavLink>
      <NavLink className={({ isActive }) => `text-xl mr-8 ${isActive && 'border-b-2 border-b-white'}`} to='/contact'>Contact</NavLink>
    </>
  );
  return (
    <nav className="py-3 fixed w-full top-0 z-10 bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-xl dark:bg-green-400">
      <div className="navbar max-w-[1300px] mx-auto py-2 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className="lg:hidden">
              {
                open === true ? <AiOutlineClose className="text-2xl mr-4"></AiOutlineClose> :
                  <HiMiniBars4 className="text-2xl mr-4"></HiMiniBars4>
              }

            </div>
            <ul
              tabIndex={0}
              className={` ${open ? 'top-6' : '-top-96'} menu menu-sm dropdown-content bg-gradient-to-r 
              from-indigo-500 to-pink-500  mt-5 w-52 p-2 shadow`}
            >
              {links}
            </ul>
          </div>
          <h2 className="text-2xl hidden lg:block">Md. Habibullah</h2>
        </div>
        <div className="navbar-end ">
          <h2 className="text-2xl lg:hidden">Md. Habibullah</h2>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
        </div>
        <div>
          {/* <button

            className="btn ml-2">Dark</button> */}
          <div
            onClick={handleDarkTheme}
            className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="toggle text-pink-500" />
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
