import React from "react";
import PropTypes from "prop-types";
import Menu from "./Menu";

const Nav = ({children}) => (
  <nav>
    {children}
  </nav>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
