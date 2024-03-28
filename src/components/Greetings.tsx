import "@/styles/global.css";
import { useState } from "preact/hooks";

interface Props {
	messages: string[];
}

export default function Greetings({ messages }: Props) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3>{greeting}! Thank you for visiting!</h3>
			<button
				className={"greetingButton"}
				type="button"
				onClick={() => setGreeting(randomMessage())}
			>
				New Greeting
			</button>
		</div>
	);
}
