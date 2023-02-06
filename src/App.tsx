import React from "react";
import { BrowserRouter } from "react-router-dom";

import { FramePage } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <FramePage />
    </BrowserRouter>
  );
}

export default React.memo(App);
