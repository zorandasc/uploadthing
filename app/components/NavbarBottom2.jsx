import React from "react";
import "./navbarbottom2.css";

const NavbarBottom2 = ({handleDropZone}) => {
  return (
    <nav className="nav2">
      <menu>
        <li>
          <i className="fa fa-home" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-users" aria-hidden="true"></i>
        </li>
        <li onClick={handleDropZone}>
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </li>
      </menu>
    </nav>
  );
};

export default NavbarBottom2;
