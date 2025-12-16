import styles from "./styles/NumberField.module.scss"

function NumberField({guessedNumber}) {
	return ( 
		<div className={styles["game__inputs-container"]}>
			<input type="number" disabled={true} value={guessedNumber[0]??""}/>
			<input type="number" disabled={true} value={guessedNumber[1]??""}/>
			<input type="number" disabled={true} value={guessedNumber[2]??""}/>
		</div>
	 );
}

export default NumberField;