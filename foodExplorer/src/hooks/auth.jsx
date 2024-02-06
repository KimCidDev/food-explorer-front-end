import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [dishData, setDishData ] = useState([]);

  
  
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

  async function getDishes () {
    try {
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      const response = await api.get('/dishes/:id');
      const rawDishes = response.data;

      const dishesArray = Array.from(Object.entries(rawDishes));
      
      localStorage.setItem('@foodExplorer:dishes', JSON.stringify(dishesArray));

      setDishData(dishesArray);
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi carregar os pratos disponíveis");
      }
      
    }
  }

  function signOut () {
    localStorage.removeItem('@foodExplorer:user');
    localStorage.removeItem('@foodExplorer:token');
    localStorage.removeItem('@foodExplorer:dishes')

    setData({});
    setDishData([])
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodExplorer:user');
    const token = localStorage.getItem('@foodExplorer:token');
    const dish = localStorage.getItem('@foodExplorer:dishes');
  
    if (user && token) {
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })

      if (!dish) {
        // Fetch dishes only if dish data is not present in localStorage
        getDishes();
      } else {
        setDishData(JSON.parse(dish));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn,
      dishData,
      getDishes,
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
