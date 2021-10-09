const rescue = require('express-rescue');
const modelExercise = require('../models');

const post = rescue(async (req, res) => {
  const {name, tecnologia} = req.body;
  const neExercise = await modelExercise.create({name, tecnologia});
  return res.status(201).json(
    {message: "exercise criado com sucesso", neExercise}); 
});

const get = rescue((_req, res) => {
  return res.status(200).json({message: "Hello World"})
})

module.exports = {
  get,
  post,
}
