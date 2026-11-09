
import styles from "./MyComponentFunction.module.css";
import main from '../assets/main.jpg';

export default function MyComponentFoto() {
  return (

   
        <img
          src={main} alt="Харків" className={styles.img} />
 

  );
}