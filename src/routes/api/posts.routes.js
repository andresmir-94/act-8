const router = require('express').Router();

const { getAll, getByAutorId, newPost } = require('../../controllers/posts.controller');

//GET /api/posts
router.get('/', getAll);

// POST /api/posts
router.post('/', newPost); 

// GET /api/posts/:id/autor
router.get('/:id/autor', getByAutorId);


module.exports = router;