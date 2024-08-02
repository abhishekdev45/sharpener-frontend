import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import BlogList from './components/BlogList';
import SingleBlog from './pages/SingleBlog';
import BlogForm from './components/BlogForm';

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/edit" element={<BlogForm />} />
          </Routes>
        </div>
      </Router>
    </BlogProvider>
  );
};

export default App;