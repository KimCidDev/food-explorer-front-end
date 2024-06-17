import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { FoodInfo } from '../pages/FoodInfo';
import { NewDishAdmin } from '../pages/Admin/NewDishAdmin';
import { EditDishAdmin } from '../pages/Admin/EditDishAdmin';
import { Pay } from '../pages/Pay';
import { Success } from '../pages/Success';
import { CancelPay } from '../pages/CancelPay';
import { useAuth } from '../hooks/auth';

export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {user.isAdmin && <Route path="/admin/newdish" element={<NewDishAdmin />} />}
      {user.isAdmin && <Route path="/admin/editdish/:id" element={<EditDishAdmin />} />}
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/foodinfo/:id" element={<FoodInfo />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancelpay" element={<CancelPay />} />
      {/* Catch-all route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
