import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage, RegistrationPage, LoginPage } from '@pages';
import './App.css';
import './static/css/fonts.css';

const AuthRoutes = () => (
  <Routes>
    <Route path='/auth' element={<LoginPage />} />
    <Route path='/registration' element={<RegistrationPage />} />
    <Route path='/*' element={<Navigate to='/auth' />} />
  </Routes>
);
const MainRoutes = () => (
  <Routes>
    <Route path='/*' element={<NotFoundPage />} />
  </Routes>
);

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>;
};

export default App;
