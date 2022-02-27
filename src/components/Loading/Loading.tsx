import React from "react";
import Loader from "react-loader-spinner";

const axios = require("axios");

axios
	.get("http://localhost:3000/api/v1/readiness")
	.then(function (response: any) {
		// handle success
		getJokes();
		console.log(response);
	})
	.catch(function (error: any) {
		// handle error
		console.log(error);
	});

axios
	.get("http://localhost:3000/api/v2/readiness")
	.then(function (response: any) {
		// handle success
		getJokes();
		console.log(response);
	})
	.catch(function (error: any) {
		// handle error
		console.log(error);
	});

function getJokes() {
	axios
		.get("http://localhost:3000/api/v1/jokes")
		.then(function (response: any) {
			// handle success
			console.log(response);
		})
		.catch(function (error: any) {
			// handle error
			console.log(error);
		});
}

// export const Loading: React.FC = () => (
// 	<Loader type="Oval" color="#2BAD60" height="40" width="40" />
// );
