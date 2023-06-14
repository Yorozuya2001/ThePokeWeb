import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice";
export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
