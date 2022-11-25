import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import fotos from "./Fotos.json";
import Cards from "./Cards";

export default function Gallery() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    });
    setItens(novasFotos);
  };

  return (
    <section className={styles.galeria}>
      <h2 className={styles.galeria__titulo}>Novos peludos por aqui</h2>
      <p>Nosso site está cheio de doguinhos e gatinhos ansiosos por uma família. Vem ver!</p>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
