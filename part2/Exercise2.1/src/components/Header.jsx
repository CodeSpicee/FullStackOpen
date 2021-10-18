import React from "react";

const Header = ({ text, course }) => {
  return (
    <div>
      <h1>{text}</h1>
      <h2>{course}</h2>
    </div>
  );
};

export default Header;
