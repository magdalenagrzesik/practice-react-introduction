import React from "react";

const MenuItem = ({ text, url }) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

export default MenuItem;
