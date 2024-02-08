import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Menu } from '../Pages/Menu';
import { FoodInfo } from '../Pages/FoodInfo';

import { HomeAdmin } from '../Pages/Admin/HomeAdmin';
import { MenuAdmin } from '../Pages/Admin/MenuAdmin';
import { FoodInfoAdmin } from '../Pages/Admin/FoodInfoAdmin';
import { NewDishAdmin } from '../Pages/Admin/NewDishAdmin';
import { EditDishAdmin } from '../Pages/Admin/EditDishAdmin';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/foodInfo/:id" element={<FoodInfo/>} />

      <Route path="/admin/" element={<HomeAdmin />} />
      <Route path="/admin/menu" element={<MenuAdmin />} />
      <Route path="/admin/foodinfo/:id" element={<FoodInfoAdmin />} />
      <Route path="/admin/newdish" element={<NewDishAdmin />} />
      <Route path="/admin/editdish" element={<EditDishAdmin />} />

    </Routes>
  )
}
