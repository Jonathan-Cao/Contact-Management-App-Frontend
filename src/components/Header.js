import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Contact Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Contacts List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
