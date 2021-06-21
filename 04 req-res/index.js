const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/json'} ));

app.get('/', (req, res) => {
  res.send({
    "name": "enrique",
    "age": 31,
    "location": "Mexico"
  })
})

app.post('/', (req, res) => {
  const { name, age, location } = req.body;
  res.send(`Mi nombre es ${name} tengo ${age} años y vivo en ${location}`)
})

app.put('/', (req, res) => {
  const { name, age, location } = req.body;
  res.send(`Mi nombre es ${name} tengo ${age} años y vivo en ${location}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})