const { Router } = require("express");

/* controllers */

const getPokemons = require("../controllers/getPokemons");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonsByName = require("../controllers/getPokemonsByName");
const getTypes = require("../controllers/getTypes");
const createPokemon = require("../controllers/createPokemon");

/* middleware */
const validatePokemon = require("../middleware/validatePokemon");

let { cache } = require("../cache");

const router = Router();

router.get("/pokemons", async (req, res) => {
  try {
    if (cache.length > 0) {
      res.status(200).json(cache);
    } else {
      const pokemon = await getPokemons();
      cache.push(...pokemon);
      res.status(200).json(pokemon);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/pokemons/name", async (req, res) => {
  const { search } = req.query;
  console.log(search);
  try {
    const listOfPokemons = await getPokemonsByName(search);
    res.status(200).json(listOfPokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/pokemons/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const pokemon = await getPokemonById(idPokemon);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/types", async (req, res) => {
  try {
    const types = await getTypes();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/pokemons", validatePokemon, async (req, res) => {
  try {
    const { name, life, strength, defense, speed, height, weight, img, types } =
      req.body;

    let pokemon = await createPokemon(
      name,
      life,
      strength,
      defense,
      speed,
      height,
      weight,
      img
    );
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
