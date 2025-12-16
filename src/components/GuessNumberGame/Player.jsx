import { useEffect, useState } from "react";
import styles from "./styles/Player.module.scss";
function Player({ playerNumber, userNotGuessedNumber, currentPlayer, winner, handleMove }) {
  const [userNumber, setUserNumber] = useState("");
  function handleInputChange(e) {
    setUserNumber(Number(e.target.value));
  }

  function checkButtonDisable() {
    if (userNotGuessedNumber.includes(userNumber) || userNumber < 0 || userNumber > 9) {
      return true;
    } else {
      return false;
    }
  }

  function handleButtonClick() {
    handleMove(playerNumber, userNumber);
    setUserNumber("");
  }
  function currentPlayerTurn() {
    if (currentPlayer === playerNumber) {
      return true;
    } else {
      return false;
    }
  }
  function checkWin() {
    return playerNumber === winner ? "win" : "loss";
  }

  return (
    <div className={`${styles["game__player-container"]} ${styles.player} ${styles[checkWin()]}`}>
      <h3 className={styles["player__number"]}>Гравець: {playerNumber}</h3>
      <label className={styles["player__label"]}>
        Цифра
        <input type="number" value={userNumber} onChange={handleInputChange} disabled={!currentPlayerTurn()} max={9} min={0} />
      </label>
      <button disabled={checkButtonDisable()} onClick={handleButtonClick}>
        Зробити хід
      </button>
    </div>
  );
}

export default Player;
