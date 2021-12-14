import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cacheReducer from '../features/cache/cacheSlice';

export const store = configureStore({
  reducer: {
    cache: cacheReducer,
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
