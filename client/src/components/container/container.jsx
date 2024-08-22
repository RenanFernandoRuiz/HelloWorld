import styles from "./container.module.css";
import quadro from "../../assets/quadro.jpg";

const Container = () => {
    return (
        <div classname={styles.quadro}>
            <img src={quadro} alt="" />
        </div>
    )
}

export default Container;