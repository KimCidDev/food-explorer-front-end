import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth'

import { Home } from '../Pages/Home';
import { Menu } from '../Pages/Menu';
import { FoodInfo } from '../Pages/FoodInfo';

import { MenuAdmin } from '../Pages/Admin/MenuAdmin';
import { NewDishAdmin } from '../Pages/Admin/NewDishAdmin';
import { EditDishAdmin } from '../Pages/Admin/EditDishAdmin';


export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>   
      { user.isAdmin && <Route path="/admin/newdish" element={<NewDishAdmin />} />}
      { user.isAdmin && <Route path="/admin/editdish/:id" element={<EditDishAdmin />} />}

      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/foodinfo/:id" element={<FoodInfo/>} />
      
      <Route path="/admin/menu" element={<MenuAdmin />} />

    </Routes>
  )
}
