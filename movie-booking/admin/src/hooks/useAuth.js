import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import { useState, useEffect } from 'react';

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (authState.status === 'failed') {
      setError(authState.error);
    }
  }, [authState]);

  return {
    user: authState.user,
    token: authState.token,
    status: authState.status,
    error,
    handleLogin,
  };
};

export default useAuth;
