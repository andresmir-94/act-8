const db = require('../config/db');

//Obtener todos los posts con datos del autor
const selectAll = async ()=> {
    const [result] =await db.query('SELECT posts.id,posts.titulo,posts.descripcion,posts.fecha_creacion,posts.categoria,posts.autor_id,autores.nombre AS autor_nombre,autores.email AS autor_email, autores.imagen AS autor_imagen FROM posts JOIN autores ON posts.autor_id = autores.id');
    return result;
};

//Obbtener un post por el id del autor
const selectByAutorId = async (autorId) => {
  const [result] = await db.query(`
    SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, posts.autor_id, autores.nombre, autores.email, autores.imagen
    FROM posts
    JOIN autores ON posts.autor_id = autores.id
    WHERE autores.id = ?`, [autorId]);
  return result;
};


// Insertar un nuevo post
const insert = async ({titulo, descripcion, categoria, autor_id}) => {
  const [result] = await db.query('INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)',
    [titulo, descripcion, new Date(), categoria, autor_id]);
  return result;
};
module.exports = {
    selectAll, selectByAutorId, insert
};