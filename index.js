const express = require('express');
const bodyParser = require('body-parser');

const exercisesController = require('./controllers/exerciseControler');

const app = express();
app.use(bodyParser.json());

app.use('/exercises', exercisesController.get);

app.listen(3000, () => console.log('online'))