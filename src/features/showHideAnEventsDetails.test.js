import { loadFeature, defineFeature } from "../../node_modules/jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    let button;
    given(
      "user was presented with the list of events taking place in a chosen city",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });

        button = AppComponent.queryAllByText("Show Details")[0];
        await userEvent.click(button);

        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
      }
    );

    when("the user scrolls and examines given results", async () => {
      await userEvent.click(button);
    });

    then(
      "only basic information is visible as all event element is collapsed by default",
      async () => {
        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).not.toBeInTheDocument();
      }
    );
  });

  test("User can expand an event to see details", ({ given, when, then }) => {
    let AppComponent;
    given(
      "user was presented with the list of events taking place in a chosen city",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });
      }
    );

    when("the user is interested in one of the shown event", async () => {
      const button = AppComponent.queryAllByText("Show Details")[0];

      await userEvent.click(button);
    });

    then(
      "more information about chosen event would be visible by clicking on Show Details button",
      () => {
        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
      }
    );
  });

  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given(
      "user saw event details and got all the needed information",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });

        button = AppComponent.queryAllByText("Show Details")[0];
        await userEvent.click(button);

        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
      }
    );

    when("a user has no more interest in seeing event details", async () => {
      await userEvent.click(button);
    });

    then(
      "user can collapse an event by clicking on Hide Details button",
      () => {}
    );
  });
});
