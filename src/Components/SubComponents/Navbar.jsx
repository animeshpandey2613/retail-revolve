import React, { useState, useRef, useEffect } from "react";
import Logo from "../../images/LogoCircular.png";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function Navbar({ colorPrimary, colorSecondary }) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [options, setOptions] = useState(false);
  const [CartView, setCartView] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOptions(false); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 h-20 flex items-center justify-between pl-16 pr-16 w-screen select-none z-20">
      <SideBar CartView={CartView} setCartView={setCartView}/>
      <Link to="/">
        <div className="h-16 flex items-center gap-5">
          <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
          <div className={`text-${colorPrimary} whitespace-nowrap text-3xl`}>
            Retail Revolve
          </div>
        </div>
      </Link>
      {loggedIn ? (
        <div className="relative" ref={dropdownRef}>
          <div
            className="bg-blue-600 rounded-full w-10 h-10 text-white cursor-pointer flex justify-center items-center"
            onClick={() => setOptions(!options)}
          >
            A
          </div>
          {options && (
            <div className="absolute top-12 text-white right-0 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg p-2 w-32">
              <ul className="p-0 m-0">
                <li
                  className="p-2 hover:bg-[rgba(0,0,0,0.4)] cursor-pointer rounded-lg"
                  onClick={() => setOptions(false)}
                >
                  All Orders
                </li>
                <li
                  className="p-2 hover:bg-[rgba(0,0,0,0.4)] cursor-pointer rounded-lg"
                  onClick={() => {
                    setOptions(false);
                    setCartView(true);
                  }}
                >
                  Show Cart
                </li>
                <li
                  className="p-2 hover:bg-[rgba(0,0,0,0.4)] cursor-pointer rounded-lg"
                  onClick={() => setOptions(false)}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Link to="/form/login">
          <div
            className={`text-2xl text-${colorPrimary} border-${colorPrimary} border-2 p-2 rounded-md cursor-pointer hover:bg-${colorSecondary} duration-500`}
          >
            Login
          </div>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
