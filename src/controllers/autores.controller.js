const Autores = require('../models/autores.model');



const getAll = async (req, res) => {
   const autores = await Autores.selectAll();
   res.json(autores);
}

const newAutor= async (req, res) => {
    const insertar = await Autores.insert(req.body);
    res.status(201).json({ id: insertar.insertId, ...req.body });
}


module.exports = { getAll, newAutor };