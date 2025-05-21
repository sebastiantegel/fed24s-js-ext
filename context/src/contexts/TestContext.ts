import { createContext } from "react";

export const TestContext = createContext<string>(
  "Default value - Should never be seen",
);
