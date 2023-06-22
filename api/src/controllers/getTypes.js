require("dotenv").config();
const { API_URL_BASE } = process.env;
const axios = require("axios");
const { Type } = require("../db");

const getTypes = async () => {
  const typesInDB = await Type.findAll();

  if (typesInDB.length) return typesInDB;

  const { data } = await axios.get(`${API_URL_BASE}/type`);
  data.results.map((result) => {
    delete result.url;
  });
  await Type.bulkCreate(data.results);
  return data.results;
};

module.exports = getTypes;
