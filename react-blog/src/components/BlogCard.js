import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { deleteBlog, setCurrentBlog } = useContext(BlogContext);

  const handleEdit = () => {
    setCurrentBlog(blog);
    navigate('/edit');
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={blog.imageUrl} alt={blog.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.title}</div>
        <p className="text-gray-700 text-base">{blog.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate(`/blog/${blog._id}`)} className="text-blue-500">View</button>
        <div className="flex space-x-2">
          <button onClick={handleEdit} className="text-green-500">Edit</button>
          <button onClick={() => deleteBlog(blog._id)} className="text-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
