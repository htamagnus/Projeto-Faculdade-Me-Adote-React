import styles from "./Banner.module.scss";
import BannerPrincipalCachorro1 from "./BannerPrincipalCachorro1.png";

export default function Banner() {
  return (
    <div className={styles.principal__imagem}>
      <img
        src={BannerPrincipalCachorro1}
        alt="Foto de um cachorro com pelos brancos e marrons, olhos marrons, e boca aberta, pegando um vento"
      />
    </div>
  );
}
