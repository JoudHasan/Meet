// src/setupTests.js
import "@testing-library/jest-dom";

// Here, add portions of the warning messages you want to intentionally prevent from appearing
const MESSAGES_TO_IGNORE = [
  "When testing, code that causes React state updates should be wrapped into act(...):",
  "Error:",
  "The above error occurred",
];

// Store a reference to the original console.error function
const originalError = console.error.bind(console.error);

// Override console.error to filter out specified warning messages
console.error = (...args) => {
  // Check if the current warning message matches any of the messages to ignore
  const ignoreMessage = MESSAGES_TO_IGNORE.find((message) =>
    args.toString().includes(message)
  );
  // If the message is not in the ignore list, output the warning
  if (!ignoreMessage) {
    originalError(...args);
  }
};
const { ResizeObserver } = window;

beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});
// Optionally, set a custom timeout for all tests if needed
jest.setTimeout(20000);
