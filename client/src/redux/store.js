import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice";
import optionsReducer from "./optionsSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    options: optionsReducer,
  },
});
