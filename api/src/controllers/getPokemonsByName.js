require("dotenv").config();

const { API_URL_BASE } = process.env;
const axios = require("axios");

const getPokemonsByName = async (name) => {
  const { data } = await axios.get(`${API_URL_BASE}/pokemon/${name}`);
  return data;
};

module.exports = getPokemonsByName;
