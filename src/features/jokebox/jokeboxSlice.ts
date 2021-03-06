import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchJokebox } from "./jokeboxAPI";

export interface JokeboxState {
	jokes: any[];
	status: "idle" | "loading" | "failed";
}

const initialState: JokeboxState = {
	jokes: [],
	status: "idle",
};

export const fetchJokeboxAsync = createAsyncThunk(
	"jokebox/fetchJokebox",
	async (joke: any) => {
		const response = await fetchJokebox(joke);
		// The value we return becomes the `fulfilled` action payload
		return response.data;
	}
);

export const jokeboxSlice = createSlice({
	name: "jokebox",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		changeFavourite: (state, action) => {
			state.jokes[action.payload].favourite =
				!state.jokes[action.payload].favourite;
		},
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	extraReducers: (builder) => {
		builder
			.addCase(fetchJokeboxAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchJokeboxAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.jokes = action.payload;
			});
	},
});

export const { changeFavourite } = jokeboxSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.jokebox.value)`
export const selectJokebox = (state: RootState) => state.jokebox;

export default jokeboxSlice.reducer;
