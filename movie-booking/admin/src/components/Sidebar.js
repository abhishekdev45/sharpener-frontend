import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFilm, FaListAlt, FaClock, FaTicketAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-indigo-800 text-white flex flex-col p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <NavLink
        to="/add-category"
        className="flex items-center mb-4 p-2 hover:bg-indigo-600 rounded"
        activeClassName="bg-indigo-600"
      >
        <FaListAlt className="mr-2" />
        Add Category
      </NavLink>
      <NavLink
        to="/add-movie"
        className="flex items-center mb-4 p-2 hover:bg-indigo-600 rounded"
        activeClassName="bg-indigo-600"
      >
        <FaFilm className="mr-2" />
        Add Movie
      </NavLink>
      <NavLink
        to="/manage-showtime"
        className="flex items-center mb-4 p-2 hover:bg-indigo-600 rounded"
        activeClassName="bg-indigo-600"
      >
        <FaClock className="mr-2" />
        Manage Showtime
      </NavLink>
      <NavLink
        to="/booked-movies"
        className="flex items-center mb-4 p-2 hover:bg-indigo-600 rounded"
        activeClassName="bg-indigo-600"
      >
        <FaTicketAlt className="mr-2" />
        Booked Movies
      </NavLink>
    </div>
  );
};

export default Sidebar;
