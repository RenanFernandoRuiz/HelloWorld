import styles from "./container.module.css";
import quadro from "../../assets/quadro.jpg";

const Container = () => {
  return (
    <body>
      <div className={styles.sidebar}>
        <a href="#">Hello World</a>
        <a href="#">Cursos</a>
        <a href="#">Sobre</a>
        <a href="#">Desenvolvimento</a>
        <a href="#">Contato</a>
      </div>
      
      <div className={styles.all}>
        <img src={quadro} alt="tela" />
        <h2>O jeito grátis, divertido e eficaz de aprender programação!</h2>
      </div>
    </body>
  );
};

export default Container;
