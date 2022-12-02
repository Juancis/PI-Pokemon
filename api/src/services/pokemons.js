const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';

const { Pokemon, Type } = require('../db');

module.exports = {
  getAllPokemonsApi: async () => {
    const list = await axios.get(URL + '?limit=40');
    let pokemons = list.data.results.map(async (p) => {
      const { data } = await axios.get(p.url);
      return {
        name: p.name,
        image:
          data.sprites.versions[`generation-v`][`black-white`].animated
            .front_default,
        types: data.types.map((t) => t.type.name),
        id: data.id,
        attack: data.stats[1].base_stat,
      };
    });
    return Promise.all(pokemons);
  },

  getPokemonId: async (id) => {
    if (!isNaN(id)) {
      const { data } = await axios.get(`${URL}/${parseInt(id)}`);
      return {
        name: data.name,
        image: data.sprites.other.home.front_default,
        types: data.types.map((type) => type.type.name),
        id: data.id,
        weight: data.weight,
        height: data.height,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
      };
    } else {
      let pokemon = await Pokemon.findByPk(id, { include: { model: Type } });
      let types = pokemon.types.map((t) => t.name);
      pokemon.dataValues.types = types;
      return pokemon.dataValues;
    }
  },

  getPokemonDB: async (name) => {
    let pokemon = await Pokemon.findOne({
      where: {
        name,
      },
      include: { model: Type },
    });
    let types = pokemon.types.map((t) => t.name);
    pokemon.dataValues.types = types;
    return pokemon.dataValues;
  },

  getAllPokemonsDB: async () => {
    let pokemons = await Pokemon.findAll({
      include: { model: Type },
    });
    pokemons = pokemons.map((p) => ({
      name: p.name,
      image: p.image,
      types: p.types.map((t) => t.name),
      id: p.id,
      attack: p.attack,
    }));

    return pokemons;
  },

  getPokemonAPI: async (name) => {
    let { data } = await axios.get(`${URL}/${name}`);
    return {
      name: data.name,
      image: data.sprites.other.home.front_default,
      types: data.types.map((type) => type.type.name),
      id: data.id,
      weight: data.weight,
      height: data.height,
      attack: data.stats[1].base_stat,
    };
  },

  findOrCreatePokemon: async (body) => {
    const { name, hp, attack, defense, speed, height, weight, image } = body;
    const pokemonOne = await Pokemon.findOne({ where: { name } });

    if (pokemonOne) throw new Error();

    return Pokemon.create({
      name: name.toLowerCase(),
      hp: hp ? hp : 0,
      attack: attack ? attack : 100,
      defense: defense ? defense : 100,
      speed: speed ? speed : 100,
      height: height ? height : 0,
      weight: weight ? weight : 0,
      image: image ? image : 'default',
    });
  },
};
