const Posts = require('../models/posts.model');


//Obtener todos los posts
const getAll = async (req, res) => {
   const posts = await Posts.selectAll();
   res.json(posts);
}

// Obtener un post por el id del autor
const getByAutorId = async (req, res) => {
  const autorId = req.params.id;
  const posts = await Posts.selectByAutorId(autorId);
  res.json(posts);
};


// Insertar un nuevo post
const newPost = async (req, res) => {
  const result = await Posts.insert(req.body);
  res.json({ id: result.insertId, ...req.body });
};


module.exports = { getAll, newPost, getByAutorId }