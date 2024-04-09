import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  test("renders number of events text input", () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const numberTextBox = screen.getByTestId("numberOfEventsInput");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("textboxNumber");
  });

  test("default value of the input field is 32", () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const numberTextBox = screen.getByTestId("numberOfEventsInput");
    expect(numberTextBox).toHaveValue("32");
  });

  test("value changes accordingly when user types", async () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const numberInput = screen.getByTestId("numberOfEventsInput");
    await userEvent.type(numberInput, "{backspace}{backspace}10");
    expect(numberInput).toHaveValue("10");
  });
});

// Integration testing
describe("<NumberOfEvents /> integration", () => {
  test("user can change the number of events displayed", async () => {
    render(<App />);
    const AppDOM = screen.getByTestId("app");

    const NumberOfEventsDOM = within(AppDOM).getByTestId("number-of-events");
    const numberOfEventsInput = within(NumberOfEventsDOM).getByTestId(
      "numberOfEventsInput"
    );
    await userEvent.type(numberOfEventsInput, "{backspace}{backspace}10");

    const EventListDOM = within(AppDOM).getByTestId("event-list");

    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole("listitem");
    expect(allRenderedEventItems.length).toEqual(10);
  });
});
