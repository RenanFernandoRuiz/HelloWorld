import styles from "./container.module.css";
import quadro from "../../assets/quadro.jpg";

const Container = () => {
  return (
    <div className={styles.all}>
      <img src={quadro} alt="tela" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Container;
