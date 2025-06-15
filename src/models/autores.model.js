const db = require('../config/db');

//Obtener todos los autores
const selectAll = async ()=> {
    const [result] =await db.query('SELECT * FROM autores');
    return result;
};

// Insertar un nuevo autor
const insert = async ({nombre, email, imagen}) => {
    const [result] = await db.query('INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);
    return result;
};

module.exports = {
    selectAll, insert
};