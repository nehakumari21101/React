// import React from "react";
import { useState } from "react";

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
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
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
