import { loadFeature, defineFeature } from "../../node_modules/jest-cucumber";
import { render, waitFor, within, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When a user hasn't specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("user was presented with number of available events", () => {
      AppComponent = render(<App />);
    });

    when("the user doesn't change the number of shown events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then("32 event will be presented to the user by default", () => {
      expect(eventList.length).toEqual(32);
    });
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("user was presented with number of available events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("the user changes the number of shown event", async () => {
      const input = screen.queryByTestId("numberOfEventsInput");

      await userEvent.type(input, "{backspace}{backspace}10");
    });

    then("chosen number of event will be shown", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventList = within(AppDOM).queryAllByRole("listitem");
      expect(eventList.length).toEqual(10);
    });
  });
});
