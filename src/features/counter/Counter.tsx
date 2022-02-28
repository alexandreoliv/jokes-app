import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
	fetchCounterAsync,
	fetchExtraJokeAsync,
	decrement,
	selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";
import { Oval } from "react-loader-spinner";

////////////////////// Server configuration //////////////////////
import { server } from "../../mock-server"; // our fake JokeAPI
server(); // our fake JokeAPI

const axios = require("axios");

function connectEndpoint(endpoint: string) {
	axios
		.get(endpoint)
		.then(function (response: any) {
			// handle success
			console.log(response.data.ready);
			if (response.status === 200) return response.data.ready;
		})
		.catch(function (error: any) {
			// handle error
			console.log(error.response.data.errors.message);
			// console.log(error.response.status);
			// console.log(error.response.headers);
			if (error.response.status === 503)
				return error.response.data.errors.message;
		});
}

const server1 = connectEndpoint("http://localhost:3000/api/v1/readiness");
const server2 = connectEndpoint("http://localhost:3000/api/v2/readiness");
////////////////////// Server configuration //////////////////////

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
			answer: "Bartender says, 'Here, but I’ll need that back in an hour!'",
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

	const extraJoke = {
		id: "6",
		type: "programming",
		question:
			"Eight bytes walk into a bar. The bartender asks, “Can I get you anything?”",
		answer: "'Yeah', reply the bytes. 'Make us a double.'",
	};

	return (
		<div>
			<div className={styles.row}>
				{count.status === "loading" && "Loading..."}
				{count.status === "loading" && (
					<Oval color="#00BFFF" height={30} width={30} />
				)}
				{count.jokes.map((joke: any) => (
					<div key={joke.id}>
						<p>ID: {joke.id}</p>
						<p>Type: {joke.type}</p>
						<p>Question: {joke.question}</p>
						<p>Answer: {joke.answer}</p>
						<button>Add to favourites</button>
					</div>
				))}
				{console.log(count)}
			</div>
			<button
				className={styles.asyncButton}
				onClick={() => dispatch(fetchCounterAsync(fakeJokes))}
			>
				(Async) Add All Jokes
			</button>
			<button
				className={styles.button}
				onClick={() => dispatch(decrement())}
			>
				Delete Last Joke
			</button>
			<button
				className={styles.button}
				onClick={() => dispatch(fetchExtraJokeAsync(extraJoke))}
			>
				(Async) Add Extra Joke
			</button>
		</div>
	);
}
