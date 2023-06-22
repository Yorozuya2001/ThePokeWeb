require("dotenv").config();

const { API_URL_BASE } = process.env;
const axios = require("axios");
let { cache } = require("../cache");
const getPokemonsByName = async (name) => {
  if (cache.length > 0) {
    const pokemons = cache.filter((pokemon) => pokemon.name.includes(name));
    return pokemons;
  }

  const { data } = await axios.get(`${API_URL_BASE}/pokemon/${name}`);

  return data;
};

module.exports = getPokemonsByName;
