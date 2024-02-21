import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  // <ChakraProvider>
    <App />,
  // </ChakraProvider>,
  document.getElementById("root")
);
