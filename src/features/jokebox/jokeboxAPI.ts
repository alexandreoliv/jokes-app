// A mock function to mimic making an async request for data
export function fetchJokebox(joke: any) {
	return new Promise<{ data: any }>((resolve) =>
		setTimeout(() => resolve({ data: joke }), 2000)
	);
}

export function fetchBonusJoke(joke: any) {
	return new Promise<{ data: any }>((resolve) =>
		setTimeout(() => resolve({ data: joke }), 2000)
	);
}
