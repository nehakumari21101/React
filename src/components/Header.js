// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <>
      <div className="header">
        <div className="logo-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYykfYsCo23klF-7m4mwCfhUAEYjT1JEKdA&s"
            alt=""
            className="logo"
          />
        </div>

        <div className="nav-items">
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
              <a href="/">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button
              onClick={() => {
                setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
              }}
            >
              {loginBtn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
