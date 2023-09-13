import React from "react";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const alt = "Put your logo here!";
  return (
    <div>
      <div className="navbar bg-base-100">
        <img src={logo} alt={alt} className="logo" />
        <h1 className="text-3xl font-bold">My Project</h1>
      </div>
    </div>
  );
};

export default Header;
