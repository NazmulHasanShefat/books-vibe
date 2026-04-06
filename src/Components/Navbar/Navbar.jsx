import React from "react";
import { Link, NavLink } from "react-router";
const menus = [
  { name: "Home", link: "/" },
  { name: "listed books", link: "/listed-books" },
  { name: "pages to read", link: "/pages-to-read" },
];
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">books vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            { menus.map((menu, index) => <li key={index}>
                <NavLink className={({ isActive }) => isActive ? "border-2 border-green-300 text-green-500 hover:bg-green-100" : "border-2 border-transparent hover:bg-green-100"} to={menu.link}>
                    {menu.name}
                </NavLink>
            </li>)}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a className="btn bg-green-500 rounded-lg text-white">sign in </a>
        <a className="btn bg-green-600 rounded-lg text-white">sign up </a>
      </div>
    </div>
  );
};

export default Navbar;
