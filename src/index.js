import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import React, { StrictMode } from "react";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
