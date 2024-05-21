import { useState } from "react";
import "../styles/global.css";
import "../styles/input.css";

interface Props {
	word?: string;
	translations?: string[];
	GetNext: () => void;
}

export default function WordForm({ word, translations, GetNext }: Props) {
	const [correct, setCorrect] = useState(false);

	function onChange(val: string) {
		if (val === word) {
			setCorrect(true);
		} else {
			setCorrect(false);
		}
	}

	return (
		<div>
			<h2>{translations?.join(", ")}</h2>
			<p>{word}</p>
			<input
				className={correct ? "correct" : "input"}
				name="userInput"
				type={"text"}
				onChange={(x) => onChange(x.currentTarget.value)}
			/>
			<br />
			<br />
			<button type="button" onClick={() => GetNext()}>
				Next Word
			</button>
		</div>
	);
}
