import React from "react";
import Event from "../components/Event";
import { render } from "@testing-library/react";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";
describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0].items[0];
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

  test("renders event details when user clicks 'show details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole("button");
    user.click(button, "Show Details");
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hides event details when user clicks 'hide details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole("button");
    const details = EventComponent.container.querySelector(".details");
    user.click(button, "Hide Details");
    expect(details).not.toBeInTheDocument();
  });
});
