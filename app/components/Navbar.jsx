"use client";
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar1">
      <ul className="list">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="search"><i className="fa fa-search fa-2x" aria-hidden="true"></i></button>
      <button className="menu"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></button>
    </nav>
  );
};

export default Navbar;
