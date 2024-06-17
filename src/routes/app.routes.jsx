import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'; // Ensure this path is correct
import { Cart } from '../pages/Cart';
import { FoodInfo } from '../pages/FoodInfo';
import { NewDishAdmin } from '../pages/Admin/NewDishAdmin';
import { EditDishAdmin } from '../pages/Admin/EditDishAdmin';
import { Pay } from '../pages/Pay'; // Import the Pay component
import { Success } from '../pages/Success' // Import the Pay component;
import { CancelPay } from '../pages/CancelPay'; // Import the Pay component
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
      <Route path="/Sucess" element={<Success />} />
      <Route path="/CancelPay" element={<CancelPay />} />


    </Routes>
  );
}
