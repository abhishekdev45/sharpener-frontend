import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BlogContext } from '../context/BlogContext';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {

  const { addBlog, currentBlog, updateBlog, closeForm } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    imageUrl: currentBlog?.imageUrl || '',
    title: currentBlog?.title || '',
    description: currentBlog?.description || ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBlog) {
      updateBlog(currentBlog._id, formData);
    } else {
      addBlog(formData);
    }
    closeForm();
    navigate('/');
  };

  const buttonText = currentBlog ? "Update" : "Save";

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
        <button className="absolute p-2 top-2 right-2 text-gray-500" onClick={closeForm}>X</button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </form>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default BlogForm;
