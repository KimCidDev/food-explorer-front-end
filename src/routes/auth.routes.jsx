// src/routes/auth.routes.jsx

import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../Pages/SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
