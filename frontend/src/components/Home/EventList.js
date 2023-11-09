import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Eventos Próximos</h2>
      {events.length === 0 ? (
        <p>No hay eventos próximos en este momento.</p>
      ) : (
        <ul className="list-group">
          {events.map((event) => (
            <li key={event.id} className="list-group-item">
              <div>
                <h3>{event.name}</h3>
                <p>
                  <strong>Fecha:</strong> {event.date}
                </p>
                <p>
                  <strong>Lugar:</strong> {event.location}
                </p>
                {/* Otros detalles del evento según tu modelo de datos */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
