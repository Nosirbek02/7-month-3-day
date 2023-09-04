import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./config/theme"
import { CssBaseline } from "@mui/material";
import App from "./App.jsx";
import { QueryClientProvider } from "react-query";
import { client } from "./config/queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);