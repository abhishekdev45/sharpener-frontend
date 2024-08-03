import React, { useState } from 'react';
import { auth, firestore } from '../utils/firebase'; // Import Firestore if needed
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle, FaImage } from 'react-icons/fa';

const CompleteProfile = () => {
  const [fullName, setFullName] = useState('');
  const [profilePicURL, setProfilePicURL] = useState('');

  const handleUpdate = async () => {
    const user = auth.currentUser;

    try {
      if (user) {
        await updateProfile(user, {
          displayName: fullName,
          photoURL: profilePicURL,
        });

        toast.success("Profile updated successfully");
        // Redirect to dashboard or another page
        // navigate('/dashboard');
      } else {
        toast.error("No user is logged in.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Complete Your Profile</h2>
        <div className="mb-4 flex items-center">
          <FaUserCircle className="text-4xl text-gray-500 mr-2" />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaImage className="text-4xl text-gray-500 mr-2" />
          <input
            type="text"
            value={profilePicURL}
            onChange={(e) => setProfilePicURL(e.target.value)}
            placeholder="Profile Picture URL"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default CompleteProfile;
