import { server } from "../mock-server"; // our fake JokeAPI
server(); // our fake JokeAPI

export default function connectToServer(endpoint: string) {
	const axios = require("axios");

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
