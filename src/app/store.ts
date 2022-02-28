import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import jokeboxReducer from "../features/jokebox/jokeboxSlice";

export const store = configureStore({
	reducer: {
		jokebox: jokeboxReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
