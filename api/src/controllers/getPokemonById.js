require("dotenv").config();
const { API_URL_BASE } = process.env;
const axios = require("axios");

const getPokemonById = async (id) => {
  const { data } = await axios.get(`${API_URL_BASE}/pokemon/${id}`);
  const {
    idData,
    name,
    types,
    sprites,
    base_experience,
    height,
    weight,
    stats,
  } = data;
  return {
    idData,
    name,
    types: types.map((type) => type.type.name),
    home: sprites.other.home.front_default,
    dream_world: sprites.other.dream_world.front_default,
    official_artwork: sprites.other["official-artwork"].front_default,
    default: sprites.front_default,
    base_experience,
    height,
    weight,
    stats,
  };
};

module.exports = getPokemonById;
