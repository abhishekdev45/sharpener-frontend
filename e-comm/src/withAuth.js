import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Replace with your actual context provider path

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate('/login'); // Redirect to login page if not authenticated
      }
    }, [token, navigate]);

    return token ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
