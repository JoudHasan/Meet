// src/components/Event.js
import React from "react";
import { useState } from "react";
const Event = ({ key, event }) => {
  const [showDetails, setShowdetail] = useState(false);
  return (
    <li key={key} className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>Show me</p>
      <button
        className="details-btn"
        onClick={() => setShowdetail(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h3>Event Details : </h3>
          <p> {event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
