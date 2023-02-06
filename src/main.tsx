import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import App from "./App";
import theme from "./theme";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
