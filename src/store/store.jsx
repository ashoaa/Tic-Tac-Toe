import { createSlice, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  reset: false,
  finished: false,
  player1: 0,
  player2: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state, actions) => {
      state.reset = actions.payload;
    },
    finishGame: (state, actions) => {
      state.finished = actions.payload;
    },
    player1Win: (state) => {
      state.player1 = state.player1 + 1;
    },
    player2Win: (state) => {
      state.player2 = state.player2 + 1;
    },
    resetALL: (state) => {
      state.player1 = initialState.player1;
      state.player2 = initialState.player2;
    },
  },
});

const persistConfig = {
  key: "counter",
  storage,
};

const persistedReducer = persistReducer(persistConfig, gameSlice.reducer);

const store = configureStore({
  // reducer: gameSlice.reducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const gameActions = gameSlice.actions;
export const persistor = persistStore(store);
