/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";
import { extractLocations, getEvents } from "../api";
import App from "../App";

describe("<CitySearch /> component", () => {
  test("suggestions list is hidden by default", () => {
    render(
      <CitySearch
        allLocations={[]}
        setCurrentCity={() => {}}
        setInfoAlert={() => {}}
      />
    );
    const suggestionList = screen.queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when city textbox gains focus", async () => {
    render(
      <CitySearch
        allLocations={[]}
        setCurrentCity={() => {}}
        setInfoAlert={() => {}}
      />
    );
    const cityTextBox = screen.getByRole("textbox");
    await userEvent.click(cityTextBox);
    const suggestionList = screen.getByRole("list");
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass("suggestions");
  });

  // Add the remaining tests...
});

describe("<CitySearch /> integration", () => {
  test("renders suggestions list when the app is rendered.", async () => {
    render(<App />);
    const AppDOM = screen.getByTestId("app");

    const CitySearchDOM = within(AppDOM).getByTestId("city-search");
    const cityTextBox = within(CitySearchDOM).getByRole("textbox");

    // Focus the textbox instead of simulating a click
    cityTextBox.focus();

    // Wait for asynchronous operation to complete
    await waitFor(async () => {
      const allEvents = await getEvents();
      const allLocations = extractLocations(allEvents);

      const suggestionListItems =
        within(CitySearchDOM).getAllByRole("listitem");
      expect(suggestionListItems.length).toBe(allLocations.length + 1);
    });
  });
});
