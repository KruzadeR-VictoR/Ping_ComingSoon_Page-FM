import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
// Supports weights 100-900
import "@fontsource/libre-franklin";

const theme = extendTheme({
  colors: {
    Blue: "hsl(223, 87%, 63%)",
    PaleBlue: "hsl(223, 100%, 88%)",
    LightRed: "hsl(354, 100%, 66%)",
    Gray: "hsl(0, 0%, 59%)",
    VeryDarkBlue: "hsl(209, 33%, 12%)",
    FadeBlue:'hsl(223,87%,63%)',
  },
  fonts: {
    heading: `'Libre Franklin Variable', sans-serif'`,
    body: `'Libre Franklin Variable', sans-serif'`,
  },
  fontWeight: {
    light: "300",
    semiBold: "600",
    bold: "700",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
