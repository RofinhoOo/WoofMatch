// Register.js
import React, { useState } from 'react';
import { auth } from '../../services/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      console.log('Registrando usuario...');
      await auth.createUserWithEmailAndPassword(email, password);

      auth.currentUser.updateProfile({
        displayName: fullName,
      });

      console.log('Usuario registrado con éxito:', auth.currentUser);

      // Resto del código...

    } catch (error) {
      console.error('Error al registrar usuario', error.message);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>
          Nombre completo:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
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
        <label>
          Fecha de nacimiento:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
