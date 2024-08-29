import styles from "./rest.module.css";
import sim from "../../assets/sim.svg";

const Rest = () => {
  return (
    <div className={styles.resto}>
      <div className={styles.restexto}>
        <h2>Grátis e Divertido</h2>
        <h3>
          Aprenda de forma criativa ideias
           e dicas para programação de um jogo!
          Nada melhor do que entender
           como funciona o seu jogo!
        </h3>
      </div>
      <div className={styles.sim}>
        <img src={sim} alt="" />
      </div>
    </div>
  );
};

export default Rest;
