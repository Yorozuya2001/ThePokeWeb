require("dotenv").config();
const { API_URL_BASE } = process.env;
const axios = require("axios");

const getPokemons = async () => {
  const { data } = await axios.get(`${API_URL_BASE}/pokemon`);
  return data;
};

module.exports = getPokemons;
