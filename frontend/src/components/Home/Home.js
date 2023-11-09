import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import EventList from './EventList';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mt-5">
      <Navbar />
      <h1 className="mb-4">Bienvenido a la App WoofMatch</h1>
      {loading ? (
        <p>Cargando eventos...</p>
      ) : (
        <EventList events={events} />
      )}
    </div>
  );
};

export default Home;
