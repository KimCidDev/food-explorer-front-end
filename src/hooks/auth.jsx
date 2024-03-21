import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  
  
  async function signIn ({email, password}) {
    try {
      console.log(email, password);      
      const response = await api.post('/sessions', { email, password });
      
      const { user, token } = response.data;
      console.log(response);

      localStorage.setItem('@foodExplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodExplorer:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});

      if (typeof onSuccess === 'function') {
        onSuccess();
      }

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível autenticar o seu login")
      }
      
    }

  }

  async function updateDish ({dish, dishImgFile}) {
    try {
      if (dishImgFile) {
        console.log(dishImgFile)
        const fileUploadForm = new FormData();
        fileUploadForm.append("dishImg", dishImgFile)

        const response = await api.patch(`/dishes/dishImg/${dish.id}`, fileUploadForm);
        dish.dishImg = response.data.dishImg;
      }

      await api.put(`/dishes/${dish.id}`, dish);      
      localStorage.setItem('@foodExplorer:dishes', JSON.stringify(dish));
      alert("Prato atualizado com sucesso");


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
    localStorage.removeItem('@foodExplorer:dishes');
    localStorage.removeItem('@foodExplorer:cart');

    setData({});
  };

  useEffect(() => {
    const user = localStorage.getItem('@foodExplorer:user');
    const token = localStorage.getItem('@foodExplorer:token');
  
    if (user && token) {
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)  
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      updateDish,
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
