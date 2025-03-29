import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const Menu = () => (
  <ul>
    <MenuItem text="home" url="/" />
    <MenuItem text="kontakt" url="/contact" />
  </ul>
);

Menu.propTypes = {};

export default Menu;
// Compare this snippet from 05/MenuItem.js: