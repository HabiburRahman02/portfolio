import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="hover:underline text-xl">Home</Link>
      </li>
      <li>
        <Link className="hover:underline text-xl">Skills</Link>
      </li>
      <li>
        <Link className="hover:underline text-xl">Projects</Link>
      </li>
      <li>
        <Link className="hover:underline text-xl">Education</Link>
      </li>
      <li>
        <Link className="hover:underline text-xl">Contact</Link>
      </li>
    </>
  );
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
      <div className="navbar max-w-[1400px] mx-auto py-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-xl"></FaBars>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gradient-to-r from-indigo-500 to-pink-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2 className="text-2xl">Habibur Rahman Habib</h2>
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
