import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      console.log('Attempting to sign in with:', email, password);
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      console.log('API response:', response.data);

      localStorage.setItem('@foodExplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodExplorer:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

      console.log('User and token set in localStorage and state:', user, token);
    } catch (error) {
      console.error('Sign-in error:', error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Unable to authenticate login');
      }
    }
  }

  function signOut() {
    console.log('Signing out...');
    localStorage.removeItem('@foodExplorer:user');
    localStorage.removeItem('@foodExplorer:token');
    localStorage.removeItem('@foodExplorer:dishes');
    localStorage.removeItem('@foodExplorer:cart');

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodExplorer:user');
    const token = localStorage.getItem('@foodExplorer:token');

    console.log('Reading from localStorage:', user, token);

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
