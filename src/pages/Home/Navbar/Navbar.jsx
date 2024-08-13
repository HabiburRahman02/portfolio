import { Link } from "react-router-dom";
import { FaSkullCrossbones } from "react-icons/fa6";
import { HiMiniBars4 } from "react-icons/hi2";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>
        <Link to='/' className="hover:underline text-xl">Home</Link>
      </li>
      <li>
        <Link to='aboutMe' className="hover:underline text-xl">About Me</Link>
      </li>
      <li>
        <Link to='skills' className="hover:underline text-xl">Skills</Link>
      </li>
      <li>
        <Link to='projects' className="hover:underline text-xl">Projects</Link>
      </li>
      <li>
        <Link to='education' className="hover:underline text-xl">Education</Link>
      </li>
      <li>
        <Link to='contact' className="hover:underline text-xl">Contact</Link>
      </li>
    </>
  );
  return (
    <nav className=" fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-xl">
      <div className="navbar max-w-[1400px] mx-auto py-2 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className="lg:hidden">
              {
                open === true ? <FaSkullCrossbones className="text-2xl mr-4"></FaSkullCrossbones> :
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
          <h2 className="text-2xl">Habibur Rahman</h2>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
