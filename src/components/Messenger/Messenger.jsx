import { useState } from "react";
import InputMessege from "./InputMessege";
import Messege from "./Messege";
import styles from "./styles/Messenger.module.scss";
function Messenger() {
  const [messengeList, setMessengeList] = useState([]);
  function addMessege(messege) {
    setMessengeList((prev) => [
      ...prev,
      {
        id: Date.now(),
        messege: messege,
      },
    ]);
  }
  return (
    <section className={styles.messenger}>
      <div className={styles["messenger__container"]}>
        <div className={styles["messenger__content"]}>
          <InputMessege hendleSendMessege={addMessege} />
          <div className={styles["messenger__messages-container"]}>{messengeList?.length > 0 ? messengeList.map((messege) => <Messege key={messege.id} messege={messege.messege} />) : <p>No messege yet</p>}</div>
        </div>
      </div>
    </section>
  );
}

export default Messenger;
