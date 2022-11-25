import React from "react";

export default function Cards({ itens, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}            />
            <div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
