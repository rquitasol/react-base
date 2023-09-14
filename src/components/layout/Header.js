import React from "react";
import logo from "../../assets/logo.jpg";
import pfp from "../../assets/temp-pfp.jpg";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const alt = "Put your logo here!";

  const handleLogoutOnClick = () => {
    logout();
  };

  const getProfileInfo = () => {
    if (user) {
      return (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={pfp} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-45"
          >
            <li>
              <p>Profile</p>
            </li>
            <li>
              <p>Settings</p>
            </li>
            <li>
              <p onClick={handleLogoutOnClick}>Logout</p>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={logo} alt={alt} className="logo" />
        <h1 className="text-3xl font-bold">My Project</h1>
      </div>
      <div className="flex-none gap-2">{getProfileInfo()}</div>
    </div>
  );
};

export default Header;
