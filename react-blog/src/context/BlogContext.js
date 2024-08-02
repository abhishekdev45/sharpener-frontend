import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchBlogs = async () => {
    console.log("hi" , process.env.REACT_APP_CRUD_CRUD_API_KEY)
    const response = await axios.get(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_CRUD_API_KEY}/blogs`);
    
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const addBlog = async (blog) => {
    const response = await axios.post(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_CRUD_API_KEY}/blogs`, blog);
    setBlogs([...blogs, response.data]);
  };

  const updateBlog = async (id, updatedBlog) => {
    await axios.put(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_CRUD_API_KEY}/blogs/${id}`, updatedBlog);
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await axios.delete(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_CRUD_API_KEY}/blogs/${id}`);
    setBlogs(blogs.filter(blog => blog._id !== id));
  };
  
  const openForm = (blog) => {
    setCurrentBlog(blog);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setCurrentBlog(null);
    setIsFormOpen(false);
  };
  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog, currentBlog, setCurrentBlog, isFormOpen, openForm, closeForm }}>
      {children}
    </BlogContext.Provider>
  );
};
