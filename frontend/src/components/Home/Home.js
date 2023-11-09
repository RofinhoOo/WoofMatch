import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import EventList from './EventList';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una solicitud a tu backend para obtener la lista de eventos.
    // Puedes usar fetch() o librerías como axios.
    // Ejemplo ficticio:
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Bienvenido a la Aplicación de Quedadas de Perros</h1>
      <EventList events={events} />
    </div>
  );
};

export default Home;
