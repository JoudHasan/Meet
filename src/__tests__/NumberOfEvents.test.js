import React from "react";
import { render } from "@testing-library/react"; // Ensure to import render from @testing-library/react
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    // Render the component and store the rendered component in NumberOfEventsComponent
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("contains element with role 'textbox'", () => {
    const numberTextBox = NumberOfEventsComponent.getByRole("textbox"); // Use getByRole instead of queryByRole
    expect(numberTextBox).toBeInTheDocument();
  });

  test("32 events are rendered as default", () => {
    const inputField = NumberOfEventsComponent.getByRole("textbox"); // Use getByRole instead of queryByRole
    expect(inputField).toHaveValue("32");
  });

  test("value of number of events updates correctly when user types in textbox", async () => {
    const inputField = NumberOfEventsComponent.getByRole("textbox"); // Use getByRole instead of queryByRole
    await userEvent.clear(inputField);
    await userEvent.type(inputField, "{backspace}{backspace}10");
    expect(inputField).toHaveValue("10");
  });
});
