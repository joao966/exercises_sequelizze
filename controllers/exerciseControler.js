const rescue = require('express-rescue');

const post = rescue((req, res) => {
  
});

const get = rescue((_req, res) => {
  return res.status(200).json({message: "Hello World"})
})

module.exports = {
  get,
  post,
}
