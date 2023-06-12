require("dotenv").config();
const { API_URL_BASE } = process.env;
const axios = require("axios");
const { Pokemon } = require("../db");

const createPokemon = async (
  name,
  life,
  strength,
  defense,
  speed,
  height,
  weight,
  img
) => {
  const newPokemon = await Pokemon.create({
    name,
    life,
    strength,
    defense,
    speed,
    height,
    weight,
    img,
  });

  return newPokemon;
};

module.exports = createPokemon;
