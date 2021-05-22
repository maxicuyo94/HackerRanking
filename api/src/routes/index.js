const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const hackerRouter = require('./hacker.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/hacker', hackerRouter);
router.use('/hacker', hackerRouter);

module.exports = router;
