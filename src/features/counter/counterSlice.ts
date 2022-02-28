import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount, fetchExtraJoke } from "./counterAPI";

export interface CounterState {
	// value: number;
	jokes: void[];
	status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
	jokes: [],
	status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
// 	"counter/fetchCount",
// 	async (amount: number) => {
// 		const response = await fetchCount(amount);
// 		// The value we return becomes the `fulfilled` action payload
// 		return response.data;
// 	}
// );

export const fetchCounterAsync = createAsyncThunk(
	"counter/fetchCount",
	async (joke: any) => {
		const response = await fetchCount(joke);
		// The value we return becomes the `fulfilled` action payload
		return response.data;
	}
);

export const fetchExtraJokeAsync = createAsyncThunk(
	"counter/increment",
	async (joke: any) => {
		const response = await fetchExtraJoke(joke);
		// The value we return becomes the `fulfilled` action payload
		return response.data;
	}
);

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		// increment: (state, action: PayloadAction) => {
		// 	// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// 	// doesn't actually mutate the state because it uses the Immer library,
		// 	// which detects changes to a "draft state" and produces a brand new
		// 	// immutable state based off those changes
		// 	state.jokes.push(action.payload);
		// },
		decrement: (state) => {
			state.jokes.pop();
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			// state.value += action.payload;
		},
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	extraReducers: (builder) => {
		builder
			// .addCase(incrementAsync.pending, (state) => {
			// 	state.status = "loading";
			// })
			// .addCase(incrementAsync.fulfilled, (state, action) => {
			// 	state.status = "idle";
			// 	state.value += action.payload;
			// })
			.addCase(fetchCounterAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCounterAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.jokes = action.payload;
			})
			.addCase(fetchExtraJokeAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchExtraJokeAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.jokes.push(action.payload);
			});
	},
});

export const { decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter;

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

export default counterSlice.reducer;
