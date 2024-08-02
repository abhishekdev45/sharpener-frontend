import React, { useContext } from 'react';
import BlogCard from './BlogCard';
import BlogForm from './BlogForm';
import { BlogContext } from '../context/BlogContext';

const BlogList = () => {
  const { blogs, openForm, isFormOpen } = useContext(BlogContext);

  return (
    <div className="p-4">
      {/* Heading Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">My Blog</h1>
        <p className="text-lg text-gray-600">Explore the latest posts and insights from our blog. Add, edit, or delete blogs as you wish!</p>
      </header>

      {/* Add Blog Button */}
      <button onClick={() => openForm(null)} className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300">
        Add Blog
      </button>
      
      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center mt-6">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Blog Form */}
      {isFormOpen && <BlogForm />}
    </div>
  );
};

export default BlogList;
