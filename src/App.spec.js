import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

/* In here please contirbute a test that will
verify that your form is logging to the console */

it("should have NewDay as text", () => {
  const { queryByText } = render(<App />);

  expect(queryByText(/NewDay/)).toBeTruthy();
});
