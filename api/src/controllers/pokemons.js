const express = require('express');
const router = express.Router();
const services = require('../services/pokemons.js');
const {
  getAllPokemonsApi,
  getPokemonId,
  getPokemonDB,
  getPokemonAPI,
  findOrCreatePokemon,
  getAllPokemonsDB,
} = services;

const { Type, Pokemon } = require('../db');
router.use(express.json());

router.get('/:idPokemon', async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const pokemon = await getPokemonId(idPokemon).catch(() => {});
    pokemon
      ? res.status(200).json(pokemon)
      : res.status(404).json({ message: 'Pokemon not found' });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'get/:idPokemon -> Error' });
  }
});

router.get('/', async (req, res) => {
  const queryPokemon = req.query.name?.toLowerCase();

  try {
    if (queryPokemon) {
      const pokeBd = await getPokemonDB(queryPokemon).catch(() => {});
      if (pokeBd) {
        return res.status(200).json(pokeBd);
      } else {
        const pokeApi = await getPokemonAPI(queryPokemon).catch(() => {});
        pokeApi
          ? res.status(200).json(pokeApi)
          : res.status(404).json({ error: 'The pokemon was not found' });
      }
    } else {
      const pokemonsApi = await getAllPokemonsApi().catch(() => {});
      const pokemonsDB = await getAllPokemonsDB().catch(() => {});

      const allPokemons = [...pokemonsApi, ...pokemonsDB];
      return res.status(200).json(allPokemons);
    }
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: 'get/ -> Error' });
  }
});

router.post('/', async (req, res) => {
  const { name, types } = req.body;
  try {
    // SE FIJA EN LA API SI EXISTE.-
    let pokeApi = await getPokemonAPI(name).catch((e) =>
      console.log(e.response.data)
    );
    if (pokeApi) return res.json({ error: 'The pokemon already exists' });
    const pokemon = await findOrCreatePokemon(req.body).catch((e) =>
      console.log(e)
    );

    // ASOCIA POKEMON CON LOS TYPES
    if (types) {
      const typeDB = await Type.findAll({
        where: { name: types },
      });
      await pokemon.addType(typeDB);
    }
    res.status(201).json(pokemon);

    // CONSULTA SI ESTA CREADO EN LA BD, SI NO LO ESTA, LO CREA Y LO DEVUELVE, SI NO, EL ERROR.
  } catch (e) {
    console.log(e);
    res.status(404).send({ error: 'The pokemon already exists' });
  }
});

module.exports = router;
