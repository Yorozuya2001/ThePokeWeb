require("dotenv").config();
const { API_URL_BASE } = process.env;
const axios = require("axios");

const getPokemonById = async (id) => {
  const { data } = await axios.get(`${API_URL_BASE}/pokemon/${id}`);

  return data;
};

module.exports = getPokemonById;
