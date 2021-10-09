const rescue = require('express-rescue');
const {exercises} = require('../models');

const post = rescue(async (req, res) => {
  const {name, tecnologia} = req.body;
  const newExercise = await exercises.create({name, tecnologia});
  return res.status(201).json(
    {message: "exercise criado com sucesso", newExercise}); 
});

const getAll = rescue(async (_req, res) => {
  const findAllExercises = await exercises.findAll();
  return res.status(200).json(findAllExercises)
})

const getById = rescue(async (req, res) => {
  const {id} = req.params;
  const exerciseById = await exercises.findByPk(id);
  return res.status(200).json(exerciseById)
})


module.exports = {
  getAll,
  post,
  getById,
}
