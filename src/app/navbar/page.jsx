"use client"

import Link from "next/link";
import "./navbar.css";
import { useState } from "react";

function Navbar() {


  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const openMenu = menu ? 'enlaces open' : 'enlaces';



  return (
    <>
      <nav className="navbar">
        <div onClick={toggleMenu} className="logo">
          <Link href="/">
            <img src="logo.png" alt="" />
          </Link>
        </div>
        <ul className={openMenu}>
          <li onClick={toggleMenu}>
            <Link href="/">Inicio</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/horarios">Horarios</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/ministerios">Ministerios</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/fundacion">Fundación</Link>
          </li>
          {/* <li>
            <Link href="/beneficiarios">Beneficiarios</Link>
          </li> */}
        </ul>

        <div onClick={toggleMenu} className="menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
