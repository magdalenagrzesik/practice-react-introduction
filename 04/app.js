import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "../03/MenuItem.js";

const root = createRoot(document.querySelector("#root"));

const Nav = () => (
  <nav>
    <Menu />
  </nav>
);

const Menu = () => (
  <ul>
    <MenuItem text="home" url="/" />
    <MenuItem text="kontakt" url="/contact" />
  </ul>
);

const App = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

root.render(<App />);
