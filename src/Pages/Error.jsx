import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>There's nothing to show here </h1>
      <NavLink to="/">Return to home page</NavLink>
    </div>
  );
};

export default Error;
