import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { FoodInfo } from '../pages/FoodInfo';

import { HomeAdmin } from '../pages/Admin/HomeAdmin';
import { MenuAdmin } from '../pages/Admin/MenuAdmin';
import { FoodInfoAdmin } from '../pages/Admin/FoodInfoAdmin';
import { NewDishAdmin } from '../pages/Admin/NewDishAdmin';
import { EditDishAdmin } from '../pages/Admin/EditDishAdmin';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/foodInfo" element={<FoodInfo/>} />

      <Route path="/admin/" element={<HomeAdmin />} />
      <Route path="/admin/menu" element={<MenuAdmin />} />
      <Route path="/admin/foodinfo" element={<FoodInfoAdmin />} />
      <Route path="/admin/newdish" element={<NewDishAdmin />} />
      <Route path="/admin/editdish" element={<EditDishAdmin />} />

    </Routes>
  )
}
