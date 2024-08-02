import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BlogContext } from "../context/BlogContext";

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteBlog, setCurrentBlog } = useContext(BlogContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(
        `https://crudcrud.com/api/${process.env.REACT_APP_CRUD_CRUD_API_KEY}/blogs/${id}`
      );
      setBlog(response.data);
    };

    fetchBlog();
  }, [id]);

  const handleEdit = () => {
    setCurrentBlog(blog);
    navigate("/edit");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {blog ? (
        <>
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={blog.imageUrl}
            alt={blog.title}
          />
          <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
          <p className="text-gray-700 mt-4">{blog.description}</p>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white p-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteBlog(blog._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBlog;
