// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/privateRoute/PrivateRoute';

const App = () => {
  const authenticated = false; // Aquí deberías leer el estado de autenticación de tu aplicación

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute
          path="/profile"
          element={<Profile />}
          authenticated={authenticated}
        />
      </Routes>
    </Router>
  );
};

export default App;
