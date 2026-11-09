import styles from "./MyComponentFunction.module.css";


export default function MyComponentInfo() {
  return (

      <div className={styles.card}>
<p> Країна: Україна</p>
<p> Місто: Харків</p>
<p> Населення: 1,4 млн</p>
      </div>

  );
}