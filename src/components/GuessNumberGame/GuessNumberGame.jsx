import { useEffect, useState } from "react";
import styles from "./styles/GuessNumberGame.module.scss";
import NumberField from "./NumberField";
import Player from "./Player";
function GuessNumberGame() {
  const [secretNumber, setSecretNumber] = useState([]);
  const [randNum, setRandNum] = useState(() => {
    return 100 + Math.floor(Math.random() * 900);
  });
  const [guessedNumber, setGuessedNumber] = useState(Array(3).fill(null));
  const [userNotGuessedNumber, setUserNotGuessedNumber] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    setSecretNumber(
      randNum
        ?.toString()
        .split("")
        .map((el) => Number(el))
    );
  }, []);

  function handleMove(playerNumber, userNumber) {
    if (winner) return;
    if (secretNumber.includes(userNumber)) {
      setGuessedNumber((prev) => {
        const index = secretNumber.indexOf(userNumber);
        if (prev[index] !== null) return prev;
        else {
          const copy = [...prev];
          copy[index] = userNumber;
          const isGameOver = copy.every((el) => el !== null);
          if (isGameOver) {
            setWinner(playerNumber === 1 ? 2 : 1);
          } else {
            setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
          }
          return copy;
        }
      });
    } else {
      setUserNotGuessedNumber((prev) => [...prev, userNumber]);
      setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
    }
  }

  console.log(secretNumber);
  return (
    <section className={styles["game"]}>
      <div className={styles["game__container"]}>
        <div className={styles["game__content"]}>
          <NumberField guessedNumber={guessedNumber} />
          <div className={styles["game__players-container"]}>
            <Player playerNumber={1} userNotGuessedNumber={userNotGuessedNumber} currentPlayer={currentPlayer} winner={winner} handleMove={handleMove} />
            <Player playerNumber={2} userNotGuessedNumber={userNotGuessedNumber} currentPlayer={currentPlayer} winner={winner} handleMove={handleMove} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuessNumberGame;
