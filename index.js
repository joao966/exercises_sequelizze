const express = require('express');
const bodyParser = require('body-parser');

const exercisesController = require('./controllers/exerciseControler');

const app = express();
app.use(bodyParser.json());

app.get('/exercises', exercisesController.get);
app.post('/exercises', exercisesController.post);


app.listen(3000, () => console.log('online'))