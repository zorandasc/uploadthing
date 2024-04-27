"use client";
import React, { useState } from "react";
import "./menubutton.css"

const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="container">
      <div className={`menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
    </div>
    );
};

export default MenuButton;