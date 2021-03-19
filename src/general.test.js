import * as React from "react";
import * as ReactDom from "react-dom";

import { App } from "./App";

test("renderiza title", () => {
  const root = document.createElement("div");
  ReactDom.render(<App />, root);
  expect(root).toBe(true);
});
