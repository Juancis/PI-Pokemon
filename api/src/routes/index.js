const { Router } = require('express');
const pokemonsRouter = require('../controllers/pokemons.js');
const typesRouter = require('../controllers/types');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

module.exports = router;
