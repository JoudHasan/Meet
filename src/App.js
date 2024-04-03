import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allEvents = await getEvents();
        const filteredEvents =
          currentCity === "See all cities"
            ? allEvents
            : allEvents.filter((event) => event.location === currentCity);
        setEvents(filteredEvents.slice(0, currentNOE));
        setAllLocations(extractLocations(allEvents));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [currentCity, currentNOE]);

  const handleNumberOfEventsChange = (numberOfEvents) => {
    setCurrentNOE(numberOfEvents);
  };

  return (
    <div className="App">
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        className="city"
      />
      <NumberOfEvents
        setCurrentNOE={handleNumberOfEventsChange}
        setErrorAlert={console.error}
      />
      <EventList events={events} className="event" />
    </div>
  );
};

export default App;
