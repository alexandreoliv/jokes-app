import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Joke } from "../../types/Joke";

export interface FavouritesState {
	favourites: object[];
	status: "idle" | "loading" | "failed";
}

const initialState: FavouritesState = {
	favourites: [],
	status: "idle",
};

export const favouritesSlice = createSlice({
	name: "favourites",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		decrement: (state) => {
			state.favourites.pop();
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			// state.value += action.payload;
		},
	},
});

export const { decrement, incrementByAmount } = favouritesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.jokebox.value)`
export const selectFavourites = (state: RootState) => state.favourites;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
// 	(amount: number): AppThunk =>
// 	(dispatch, getState) => {
// 		const currentValue = selectCount(getState());
// 		if (currentValue % 2 === 1) {
// 			dispatch(incrementByAmount(amount));
// 		}
// 	};

export default favouritesSlice.reducer;
