import React, { useState } from "react";

const Event = ({ eventId, event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li key={eventId} className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>Show me</p>
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="details">
          <h3>Event Details:</h3>
          <p>{event.description}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
