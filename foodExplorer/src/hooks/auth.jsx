import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [dishData, setDishData ] = useState([]);

  async function getDishes () {
    try {      
      const response = await api.get('/dishes');
      const dishesArray = response.data;
  
      // Assuming dishData is an array with one entry (the specific structure you provided)  
      localStorage.setItem('@foodExplorer:dishes', JSON.stringify(dishesArray));
      setDishData(dishesArray);

      const dishesArrayWithId = dishesArray.map(([id, dishData]) => ({
        id,
        ...dishData,
      }));
      console.log(dishesArrayWithId)

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível autenticar o seu login")
      }
      
    }

  }

  async function signIn ({ email, password}) {
    try {      
      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data;

      localStorage.setItem('@foodExplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodExplorer:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível autenticar o seu login")
      }
      
    }

  }

  function signOut () {
    localStorage.removeItem('@foodExplorer:user');
    localStorage.removeItem('@foodExplorer:token');

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodExplorer:user');
    const token = localStorage.getItem('@foodExplorer:token');
  
    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
    getDishes()
  }, []);
  

  return (
    <AuthContext.Provider value={{ 
      signIn,
      dishData,
      signOut,
      user: data.user
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth () {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
