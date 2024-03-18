// src/components/Event.js
import React from "react";
import { useState } from "react";
const Event = ({ key, event }) => {
  const [showDeatils, setShowdetail] = useState(false);
  return (
    <li key={key} className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>Show me</p>
      <button onClick={() => setShowdetail(!showDeatils)}>Show Details</button>
      {showDeatils ? (
        <div className="details">
          <h3>Event Details : </h3>
          <p> {event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
