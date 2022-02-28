import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
	fetchJokeboxAsync,
	changeFavourite,
	selectJokebox,
} from "./jokeboxSlice";
import "./Jokebox.css";
import { Oval } from "react-loader-spinner";
import connectToServer from "../../components/server";
import { jokes } from "../../components/jokes";

connectToServer("http://localhost:3000/api/v1/readiness");
connectToServer("http://localhost:3000/api/v2/readiness");

export function Jokebox() {
	const jokebox = useAppSelector(selectJokebox);
	const dispatch = useAppDispatch();
	console.log(jokebox);

	return (
		<div id="main">
			<div id="top">
				<div id="buttons">
					<button
						className="btn btn-primary"
						id="asyncButton"
						onClick={() => dispatch(fetchJokeboxAsync(jokes))}
					>
						(Async) Fetch All Jokes
					</button>
				</div>
				<div id="status" className="alert alert-secondary" role="alert">
					<p className="h6">Status:</p>
					{jokebox.status === "loading" ? (
						<Oval color="#00BFFF" height={20} width={20} />
					) : (
						<p className="h6">Idle</p>
					)}
				</div>
			</div>
			<div id="bottom">
				<div id="jokebox">
					<p className="h4">Jokebox:</p>
					{jokebox.jokes
						.filter((joke: any) => joke.type !== "Barista")
						.filter((joke: any) => !joke.favourite)
						.map((joke: any) => (
							<div key={joke.id} id="jokes">
								<div id="jokeIdType">
									<p className="h6">
										<span>ID: </span>
										{joke.id}
									</p>
									<p className="h6">
										<span>Type: </span>
										{joke.type}
									</p>
								</div>
								<p className="h6">{joke.question}</p>
								<p className="h6">{joke.answer}</p>
								<button
									id="btn-favourite"
									onClick={() =>
										dispatch(changeFavourite(joke.id - 1))
									}
								>
									🤍
								</button>
							</div>
						))}
				</div>
				<div id="favourites">
					<p className="h4">Favourites:</p>
					{jokebox.jokes
						.filter((joke: any) => joke.favourite)
						.map((joke: any) => (
							<div key={joke.id}>
								<div id="jokeIdType">
									<p className="h6">
										<span>ID: </span>
										{joke.id}
									</p>
									<p className="h6">
										<span>Type: </span>
										{joke.type}
									</p>
								</div>
								<p className="h6">{joke.question}</p>
								<p className="h6">{joke.answer}</p>
								<button
									id="btn-favourite"
									onClick={() =>
										dispatch(changeFavourite(joke.id - 1))
									}
								>
									❤️
								</button>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
