import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./MenuItem";

const root = createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <div>
      <ul>
        <MenuItem text="o mnie" url="/about" />
        <MenuItem text="kontakt" url="/contact" />
        <MenuItem text="strona główna" url="/" />
      </ul>
    </div>
  );
};

root.render(<App />);
