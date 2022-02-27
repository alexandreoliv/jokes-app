import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchCounterAsync, decrement, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";
// import { Loading } from "../../components/Loading";
import { Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { server } from "../../mock-server"; // our fake JokeAPI
// import { useGetJokesQuery } from "../../services/getJokes";
server(); // our fake JokeAPI

export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	// const { data, error, isLoading, isSuccess, isError } = useGetJokesQuery();

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
			question: "A DHCP packet walks into a bar and asks for a beer.",
			answer: 'Bartender says, "here, but I’ll need that back in an hour!"',
		},
		{
			id: "3",
			type: "barista",
			question: "Barista: How do you take your coffee?",
			answer: "Me: Very, very seriously.",
		},
		{
			id: "4",
			type: "programming",
			question: "Where do programmers like to hangout?",
			answer: "The Foo Bar.",
		},
		{
			id: "5",
			type: "programming",
			question: "What's the best thing about a Boolean?",
			answer: "Even if you're wrong, you're only off by a bit.",
		},
	];

	return (
		<div>
			<div className={styles.row}>
				{count.status === "loading" && "Loading..."}
				{count.status === "loading" && (
					<Oval color="#00BFFF" height={30} width={30} />
				)}
				{count.jokes.map((joke) => (
					<div key={joke.id}>
						<p>ID: {joke.id}</p>
						<p>Type: {joke.type}</p>
						<p>Question: {joke.question}</p>
						<p>Answer: {joke.answer}</p>
					</div>
				))}
				{console.log(count)}
			</div>
			<button
				className={styles.asyncButton}
				onClick={() => dispatch(fetchCounterAsync(fakeJokes))}
			>
				Add Async Joke
			</button>
			<button
				className={styles.button}
				onClick={() => dispatch(decrement())}
			>
				Decrement joke
			</button>
		</div>
	);
}
