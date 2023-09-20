const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const cors = require('cors')


db.sync().then(() => {
  console.log('Tablas creadas');
});



const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/tasks', require('./src/handlers/tasks'));

app.listen(3000, () => {
  console.log('El servidor esta corriendo en http://localhost:3000');
})
