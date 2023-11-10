// Login.js
import React, { useState } from 'react';
import { auth } from '../../services/firebase';  // Ajusta la ruta según la estructura de tu proyecto

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Usuario inició sesión con éxito
    } catch (error) {
      console.error('Error al iniciar sesión', error.message);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
