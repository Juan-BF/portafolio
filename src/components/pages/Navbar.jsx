import styles from "../styles/Navbar.module.css"
import logo from "../../imagenes/logo.png"
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="#Hero">
          <img src={logo} alt="imagen del logo" />
        </a>
        <div className={styles.menu}>
          <input type="checkbox" id="opcion" className={styles.inputb} onClick={() => setMenuOpen(!menuOpen)}>
          </input>
          <label htmlFor="opcion" className={styles.buttonrespo} >
            <div></div>
            <div></div>
            <div></div>
          </label>
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
            <li><a href="#About">Sobre</a></li>
            <li><a href="#Formacaos">Formação</a></li>
            <li><a href="#Projectos">Projetos</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
};




