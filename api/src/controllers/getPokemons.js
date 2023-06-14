require("dotenv").config();
const { API_URL_BASE } = process.env;
const axios = require("axios");
const getPokemons = async () => {
  const { data } = await axios.get(`${API_URL_BASE}/pokemon?offset=0&limit=12`);

  const promises = data.results.map(async (pokemon) => {
    const { data } = await axios.get(pokemon.url);
    const { id, name, types, attack, sprites } = data;
    return {
      id,
      name,
      types: types.map((type) => type.type.name),
      attack,
      image: sprites.other.home.front_default,
    };
  });

  const results = await Promise.all(promises);

  return results;
};
module.exports = getPokemons;
