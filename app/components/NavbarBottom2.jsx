"use client"
import React from "react";
import "./navbarbottom2.css";
import Link from "next/link";

import { usePathname } from 'next/navigation'

const NavbarBottom2 = () => {
  const pathname = usePathname()
  return (
    <nav className="nav2">
      <menu className="menu2">
        <li className={`link ${pathname === '/' ? 'active' : ''}`}>
          <Link  href="/" >
            <i className="fa fa-home" aria-hidden="true"></i>
          </Link>
        </li>
        <li className={`link ${pathname === '/users' ? 'active' : ''}`}>
          <Link href="/users">
            <i className="fa fa-users" aria-hidden="true"></i>
          </Link>
        </li>
        <li className={`link ${pathname === '/uploadpage' ? 'active' : ''}`}>
          <Link href="/uploadpage">
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
          </Link>
        </li>
        <li className={`link ${pathname === '/likes' ? 'active' : ''}`}>
          <Link href="/likes">
            <i className="fa fa-heart" aria-hidden="true"></i>
          </Link>
        </li>
        <li className={`link ${pathname === '/user' ? 'active' : ''}`}>
          <Link href="/user">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </Link>
        </li>
      </menu>
    </nav>
  );
};

export default NavbarBottom2;
