import { useState } from "react";
import styles from "./styles/InputMessege.module.scss";

function InputMessege({ hendleSendMessege }) {
  const [messege, setMessege] = useState("");

  function onInputMessege(e) {
    setMessege(e.target.value);
  }

  return (
    <div className={styles["messenger__container-input"]}>
      <label htmlFor="messege">Send your messege</label>
      <div className={styles["messenger__input"]}>
        <input id="messege" type="text" value={messege} onChange={onInputMessege} />
        <button
          onClick={() => {
            hendleSendMessege(messege);
            setMessege("");
          }}
          disabled={!messege}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default InputMessege;
