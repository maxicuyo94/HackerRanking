const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const hackerRouter = require('./hacker.js');
const loginRouter = require('./login.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/hacker', hackerRouter);
router.use('/hacker', hackerRouter);
router.use('/login', loginRouter);

module.exports = router;
