import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>Problemas? Contate-nos:</h4>

      <div>
        <h4>helloworld@gmail.com</h4>
        <h4>(14) 4002-8922 </h4>
      </div>

      <ion-icon
        name="logo-github"
        href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
      ></ion-icon>
      <ion-icon name="logo-instagram"></ion-icon>
      <ion-icon name="logo-whatsapp"></ion-icon>

      <div>
        <h4>Se copiar nois vai saber</h4>
        <h4>Plagio é crime comédia</h4>
      </div>

      <h4>#SemCopiaComedia</h4>
    </div>
  );
};
