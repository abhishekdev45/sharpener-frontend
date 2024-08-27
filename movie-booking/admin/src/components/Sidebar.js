import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFilm,
  FaListAlt,
  FaClock,
  FaTicketAlt,
  FaSignOutAlt,
  FaPlay,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-indigo-800 text-white flex flex-col p-4 shadow-lg justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <NavLink
          to="/add-category"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 hover:bg-indigo-600 rounded ${
              isActive ? "bg-indigo-600" : ""
            }`
          }
        >
          <FaListAlt className="mr-2" />
          Add Category
        </NavLink>
        <NavLink
          to="/add-movie"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 hover:bg-indigo-600 rounded ${
              isActive ? "bg-indigo-600" : ""
            }`
          }
        >
          <FaFilm className="mr-2" />
          Add Movie
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 hover:bg-indigo-600 rounded ${
              isActive ? "bg-indigo-600" : ""
            }`
          }
        >
          <FaPlay className="mr-2" />
          Current Movies
        </NavLink>
        <NavLink
          to="/manage-showtime"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 hover:bg-indigo-600 rounded ${
              isActive ? "bg-indigo-600" : ""
            }`
          }
        >
          <FaClock className="mr-2" />
          Manage Showtime
        </NavLink>
        <NavLink
          to="/booked-movies"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 hover:bg-indigo-600 rounded ${
              isActive ? "bg-indigo-600" : ""
            }`
          }
        >
          <FaTicketAlt className="mr-2" />
          Booked Movies
        </NavLink>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center mt-auto p-2 hover:bg-indigo-600 rounded text-white"
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
