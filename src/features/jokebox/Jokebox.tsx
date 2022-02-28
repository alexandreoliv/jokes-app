import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
	fetchJokeboxAsync,
	fetchBonusJokeAsync,
	removeLastJoke,
	changeFavourite,
	selectJokebox,
} from "./jokeboxSlice";
import styles from "./Jokebox.module.css";
import { Oval } from "react-loader-spinner";
import connectToServer from "../../components/server";
import { jokes, bonusJoke } from "../../components/jokes";

connectToServer("http://localhost:3000/api/v1/readiness");
connectToServer("http://localhost:3000/api/v2/readiness");

export function Jokebox() {
	const jokebox = useAppSelector(selectJokebox);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div className={styles.row}>
				<div>
					<button
						className={styles.asyncButton}
						onClick={() => dispatch(fetchJokeboxAsync(jokes))}
					>
						(Async) Fetch All Jokes
					</button>
					<button
						className={styles.button}
						onClick={() => dispatch(removeLastJoke())}
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
									dispatch(changeFavourite(joke.id - 1))
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
