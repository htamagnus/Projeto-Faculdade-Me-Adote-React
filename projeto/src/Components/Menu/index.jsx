import React from "react";
import styles from "./Menu.module.scss";

import Dog1 from "../../assets/Icons/Dog1.png";
import Dog2 from "../../assets/Icons/Dog2.png";
import Paw from "../../assets/Icons/Paw.png";
import Heart from "../../assets/Icons/Heart.png";


export default function Menu() {
  return (
    <nav className={styles.menu}>
      <hr className={styles.linha}></hr>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={Dog1} alt="ícone com formato de cachorro, em preto" />
          <a href="">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Paw} alt="Ícone com formato de Pata de Cachorro, em preto" />
          <a href="">Quero Adotar</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Heart} alt="Ícone com formato de coração, em preto não preenchido" />
          <a href="">Quero Ajudar</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Dog2} alt="Ícone com formato de cachorro, em preto" />
          <a href="">Quero Apadrinhar</a>
        </li>
      </ul>
    </nav>
  );
}
