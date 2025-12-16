import { useState } from "react";
import styles from "./styles/Messege.module.scss";
function Messege({ messege }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function onButtonClick(setState) {
    setState((prev) => prev + 1);
  }
  return (
    <div className={`${styles["messenger__messege"]} ${styles.messege}`}>
      <p className={styles["messege__text"]}>{messege}</p>
      <button className={`${styles["messege__button"]} ${styles["messege__button--like"]}`} onClick={() => onButtonClick(setLikes)}>
        Like:{likes}
      </button>
      <button className={`${styles["messege__button"]} ${styles["messege__button--dislike"]}`} onClick={() => onButtonClick(setDislikes)}>
        Dislike: {dislikes}
      </button>
    </div>
  );
}

export default Messege;
