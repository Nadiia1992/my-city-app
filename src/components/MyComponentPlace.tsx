import styles from "./MyComponentFunction.module.css";
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';

export default function MyComponentFoto() {
  return (
<div>
   <h3>Визначні місця:</h3>

   <div className={styles.images}>
        <img
          src={foto1} alt="Харків" className={styles.image} />
          <img
          src={foto2} alt="Харків" className={styles.image} />
          <img
          src={foto3} alt="Харків" className={styles.image} />
          <img
          src={foto4} alt="Харків" className={styles.image} />

          </div>
 
</div>
  );
}