import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  pokemons: [],
  types: [],
  pokemonsFiltered: [],
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.pokemonsFiltered = action.payload;
    },
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setPokemonsFiltered: (state, action) => {
      return produce(state, (draft) => {
        if (Object.keys(action.payload).length === 0) {
          draft.pokemonsFiltered = state.pokemons;
          return;
        }

        draft.pokemonsFiltered = state.pokemons.filter((pokemon) => {
          for (const type in action.payload) {
            if (action.payload[type] && pokemon.types.includes(type))
              return true;
          }
          return false;
        });
      });
    },
    orderPokemons: (state, action) => {
      return produce(state, (draft) => {
        draft.pokemonsFiltered.sort((a, b) => {
          if (action.payload === "Ascending") {
            return a.name > b.name ? 1 : -1;
          }

          if (action.payload === "Descending") {
            return a.name < b.name ? 1 : -1;
          }

          if (action.payload === "First id") return a.id > b.id ? 1 : -1;

          if (action.payload === "Last id") {
            return a.id < b.id ? 1 : -1;
          }
        });
      });
    },
  },
});

export const { setPokemons, setTypes, setPokemonsFiltered, orderPokemons } =
  pokemonsSlice.actions;
export default pokemonsSlice.reducer;
