import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../features/categorySlice';
import { FaHome } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const { list:categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  return (
    <header className="bg-indigo-800 text-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <FaHome className="text-3xl mr-2" />
        <NavLink to="/" className="text-2xl font-bold">
          MovieBooking
        </NavLink>
      </div>
      <nav className="flex space-x-4">
        {categories.map((category) => (
          <NavLink 
            key={category.id} 
            to={`/category/${category.name}`} 
            className="hover:text-indigo-400"
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
