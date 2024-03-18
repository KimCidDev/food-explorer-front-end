import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth'

import { Home } from '../Pages/Home';
import { Cart } from '../Pages/Cart';
import { FoodInfo } from '../Pages/FoodInfo';

import { NewDishAdmin } from '../Pages/Admin/NewDishAdmin';
import { EditDishAdmin } from '../Pages/Admin/EditDishAdmin';


export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>   
      { user.isAdmin && <Route path="/admin/newdish" element={<NewDishAdmin />} />}
      { user.isAdmin && <Route path="/admin/editdish/:id" element={<EditDishAdmin />} />}

      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/foodinfo/:id" element={<FoodInfo/>} />

    </Routes>
  )
}
