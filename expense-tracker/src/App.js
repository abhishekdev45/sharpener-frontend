import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CompleteProfile from './pages/CompleteProfile';
import Home from './pages/Home'; 
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute redirectTo="/login" />}>
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/home" element={<Home />} />
          </Route>
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
