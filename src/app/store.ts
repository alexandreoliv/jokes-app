import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import jokeboxReducer from "../features/jokebox/jokeboxSlice";
import favouritesReducer from "../features/favourites/favouritesSlice";

export const store = configureStore({
	reducer: {
		jokebox: jokeboxReducer,
		favourites: favouritesReducer,
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
