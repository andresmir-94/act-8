const router = require('express').Router();

const { getAll, newAutor } = require('../../controllers/autores.controller');

//GET /api/autores
router.get('/', getAll);

// POST /api/autores
router.post('/', newAutor);




module.exports = router;