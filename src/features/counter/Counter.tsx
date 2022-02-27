import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchCounterAsync, decrement, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [incrementAmount, setIncrementAmount] = useState("2");

	const incrementValue = Number(incrementAmount) || 0;
	const fakeJokes = [
		{
			id: "1",
			type: "programming",
			question:
				"How many programmers does it take to change a lightbulb?",
			answer: "None that's a hardware problem",
		},
		{
			id: "2",
			type: "programming",
			question:
				"How many programmers does it take to change a lightbulb?",
			answer: "None that's a hardware problem",
		},
		{
			id: "3",
			type: "programming",
			question:
				"How many programmers does it take to change a lightbulb?",
			answer: "None that's a hardware problem",
		},
	];

	return (
		<div>
			<div className={styles.row}>
				{/* {count.map((joke) => (
					<div key={joke.id}>
						<p>ID: {joke.id}</p>
						<p>Type: {joke.type}</p>
						<p>Question: {joke.question}</p>
						<p>Answer: {joke.answer}</p>
					</div>
				))} */}
				{console.log(count)}
			</div>
			<button
				className={styles.asyncButton}
				onClick={() => dispatch(fetchCounterAsync(fakeJokes))}
			>
				Add Async Joke
			</button>
			<button
				className={styles.asyncButton}
				onClick={() => dispatch(decrement())}
			>
				Decrement joke
			</button>
		</div>
	);
}
