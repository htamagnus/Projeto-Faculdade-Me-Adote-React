import Search from "./Search.png";
import styles from "./Header.module.scss";
import Logo from "./Logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src={Logo}
        alt="Logo do Me Adote, uma imagem de um cachorro e um gato em formato de coração"
        width="200"
        height="150"
      />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={Search} alt="Ícone de uma lupa em preto" />
      </div>
    </header>
  );
}
