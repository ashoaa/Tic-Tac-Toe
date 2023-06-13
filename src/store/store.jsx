import { createSlice, configureStore } from "@reduxjs/toolkit";

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
  },
});

const store = configureStore({
  reducer: gameSlice.reducer,
});

export default store;
export const gameActions = gameSlice.actions;
