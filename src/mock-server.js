import { Model, createServer, RestSerializer, Response } from "miragejs";

export const server = ({ environment = "development" } = {}) => {
	return createServer({
		environment,
		models: {
			joke: Model,
		},
		serializers: {
			application: RestSerializer,
		},

		routes() {
			this.namespace = "/api";

			this.get("/v1/readiness", () => {
				return new Response(
					503,
					{},
					{
						errors: {
							code: "SERVICE_UNAVAILABLE",
							message: "Sorry but we are too busy...",
						},
					},
					{ timing: 1500 }
				);
			});

			this.get("/v2/readiness", () => ({ ready: true }), {
				timing: 1000,
			});

			this.get(
				"/v1/jokes",
				function (schema) {
					return this.serialize(schema.jokes.all()).jokes;
				},
				{ timing: 1000 }
			);
		},
	});
};
