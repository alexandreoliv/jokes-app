import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, selectFavourites } from "./favouritesSlice";
import styles from "./Favourites.module.css";
import { Oval } from "react-loader-spinner";

export function Favourites() {
	const favourites = useAppSelector(selectFavourites);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div className={styles.row}>
				{favourites.status === "loading" && "Loading..."}
				{favourites.status === "loading" && (
					<Oval color="#00BFFF" height={30} width={30} />
				)}
				{favourites.favourites.map((joke: any) => (
					<div key={joke.id}>
						<p>ID: {joke.id}</p>
						<p>Type: {joke.type}</p>
						<p>Question: {joke.question}</p>
						<p>Answer: {joke.answer}</p>
						<button>Add to favourites</button>
					</div>
				))}
				{console.log(favourites)}
			</div>
			{/* <button
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
			</button> */}
		</div>
	);
}
