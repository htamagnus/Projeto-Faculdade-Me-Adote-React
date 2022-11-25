import styles from "./InitialPage.module.scss";

import Gallery from "Components/Gallery";
import Header from "Components/Header";
import Menu from "Components/Menu";
import Banner from "Components/Banner";

export default function InitialPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Gallery />
        </div>
      </main>
    </>
  );
}
