import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="container mx-auto flex justify-between my-8 items-center">
      <div>
        <a href="/">
          <img src={logo} alt="site-logo" />
        </a>
      </div>
      <div className="flex space-x-8">
        <ul className="flex space-x-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/templates">Templates</a>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;
