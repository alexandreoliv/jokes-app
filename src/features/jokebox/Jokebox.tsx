import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
	fetchJokeboxAsync,
	fetchBonusJokeAsync,
	decrement,
	selectJokebox,
} from "./jokeboxSlice";
import styles from "./Jokebox.module.css";
import { Oval } from "react-loader-spinner";
import { Joke } from "../../types/Joke";

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

export function Jokebox() {
	const jokebox = useAppSelector(selectJokebox);
	const dispatch = useAppDispatch();

	const fakeJokes = [
		{
			id: "1",
			type: "programming",
			question:
				"How many programmers does it take to change a lightbulb?",
			answer: "None that's a hardware problem",
			favourite: false,
		},
		{
			id: "2",
			type: "programming",
			question: "A DHCP packet walks into a bar and asks for a beer.",
			answer: "Bartender says, 'Here, but I’ll need that back in an hour!'",
			favourite: false,
		},
		{
			id: "3",
			type: "barista",
			question: "Barista: How do you take your coffee?",
			answer: "Me: Very, very seriously.",
			favourite: false,
		},
		{
			id: "4",
			type: "programming",
			question: "Where do programmers like to hangout?",
			answer: "The Foo Bar.",
			favourite: false,
		},
		{
			id: "5",
			type: "programming",
			question: "What's the best thing about a Boolean?",
			answer: "Even if you're wrong, you're only off by a bit.",
			favourite: false,
		},
	];

	const bonusJoke: Joke = {
		id: "6",
		type: "programming",
		question:
			"Eight bytes walk into a bar. The bartender asks, “Can I get you anything?”",
		answer: "'Yeah', reply the bytes. 'Make us a double.'",
		favourite: false,
	};

	return (
		<div>
			<div className={styles.row}>
				<div>
					<button
						className={styles.asyncButton}
						onClick={() => dispatch(fetchJokeboxAsync(fakeJokes))}
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
						onClick={() => dispatch(fetchBonusJokeAsync(bonusJoke))}
					>
						(Async) Add Bonus Joke
					</button>
				</div>
				<div>
					{jokebox.status === "loading" && "Loading..."}
					{jokebox.status === "loading" && (
						<Oval color="#00BFFF" height={30} width={30} />
					)}
					{jokebox.jokes.map((joke: any) => (
						<div key={joke.id}>
							<p>ID: {joke.id}</p>
							<p>Type: {joke.type}</p>
							<p>Question: {joke.question}</p>
							<p>Answer: {joke.answer}</p>
							<p>Favourite: {joke.favourite ? "Yes" : "No"}</p>
							<button
								onClick={() =>
									dispatch(fetchBonusJokeAsync(bonusJoke))
								}
							>
								Add to favourites
							</button>
						</div>
					))}
					{console.log(jokebox)}
				</div>
			</div>
		</div>
	);
}
