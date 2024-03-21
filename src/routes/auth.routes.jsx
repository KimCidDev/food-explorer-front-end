import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../Pages/SignUp';

export function AuthRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<SignIn navigate={navigate}/>} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}
