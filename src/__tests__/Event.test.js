import React from "react";
import Event from "../components/Event";
import { render, fireEvent } from "@testing-library/react";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";
describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0];
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test("render event component", () => {
    const eventComponent = EventComponent.getByText(event.summary);
    expect(eventComponent).toBeInTheDocument();
  });

  test("render event location", () => {
    expect(EventComponent.getByText(event.location)).toBeInTheDocument();
  });

  test("render event button Show details", () => {
    expect(EventComponent.getByText("Show Details")).toBeInTheDocument();
  });

  test("event details are hidden by Default", () => {
    const eventDetails = EventComponent.container.querySelector(".details");
    expect(eventDetails).not.toBeInTheDocument();
  });

  test("renders event details when user clicks 'show details' button", () => {
    const button = EventComponent.getByText("Show Details");
    fireEvent.click(button);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hides event details when user clicks 'hide details' button", () => {
    const button = EventComponent.getByText("Show Details"); // Get the "Show Details" button
    fireEvent.click(button); // Show details first
    const hideButton = EventComponent.getByText("Hide Details"); // Get the "Hide Details" button
    fireEvent.click(hideButton); // Simulate click event on "Hide Details" button
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });
});
