import { Joke } from "../types/Joke";

export const jokes = [
	{
		id: "1",
		type: "programming",
		question: "How many programmers does it take to change a lightbulb?",
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

export const bonusJoke: Joke = {
	id: "6",
	type: "programming",
	question:
		"Eight bytes walk into a bar. The bartender asks, “Can I get you anything?”",
	answer: "'Yeah', reply the bytes. 'Make us a double.'",
	favourite: false,
};
