import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("renders number of events text input", () => {
    const numberTextBox = NumberOfEventsComponent.getByTestId(
      "numberOfEventsInput"
    );
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("textboxNumber");
  });

  test("default value of the input field is 32", () => {
    const numberTextBox = NumberOfEventsComponent.getByTestId(
      "numberOfEventsInput"
    );
    expect(numberTextBox).toHaveValue("32");
  });

  test("value changes accordingly when user types", async () => {
    const user = userEvent.setup();
    const numberInput = NumberOfEventsComponent.getByTestId(
      "numberOfEventsInput"
    );
    await user.type(numberInput, "{backspace}{backspace}10");
    expect(numberInput).toHaveValue("10");
  });
});

// Integration testing
describe("<NumberOfEvents /> integration", () => {
  test("user can change the number of events displayed", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const numberOfEventsInput = within(NumberOfEventsDOM).getByTestId(
      "numberOfEventsInput"
    );
    await user.type(numberOfEventsInput, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector("#event-list");

    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole("listitem");
    expect(allRenderedEventItems.length).toEqual(10);
  });
});
