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

  function signOut () {
    localStorage.removeItem('@foodExplorer:user');
    localStorage.removeItem('@foodExplorer:token');
    localStorage.removeItem('@foodExplorer:dishes')

    setData({});
  }
  
  async function getDishes () {
    try {      
      console.log(data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      const response = await api.get('/dishes');
      console.log(response);
      const dishesArray = response.data;
      console.log(dishesArray);
      
      localStorage.setItem('@foodExplorer:dishes', JSON.stringify(dishesArray.map(dish => dish)));

      setDishData(dishesArray);


    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível autenticar o seu login")
      }
      
    }


  }

  useEffect(() => {
    const user = localStorage.getItem('@foodExplorer:user');
    const token = localStorage.getItem('@foodExplorer:token');
    const dishData = localStorage.getItem('@foodExplorer:dishes');
  
    if (user && token) {
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })

      setDishData({dish: JSON.parse(dishData)})
    }
  }, []);
  

  useEffect(() => {
    console.log("Updated dishData:", dishData);
  }, [dishData]);

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
