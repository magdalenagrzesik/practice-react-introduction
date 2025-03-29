import React from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav.js";
import Menu from "./Menu.js";

const root = createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <div>
      <Nav>
        <Menu />
      </Nav>
    </div>
  );
};

root.render(<App />);
