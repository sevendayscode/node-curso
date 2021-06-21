const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const swaggerDoc = require('./swaggerDoc')

app.use(bodyParser.json({ type: 'application/json'} ));

swaggerDoc(app);

/**
 * @swagger
 * components:
 *   schemas:
 *     Emp:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: String
 *           description: The name of the person
 *       example:
 *         name: Enrique
 *         age: 31
 *         location: México
 */

 /**
  * @swagger
  * tags:
  *   name: Emp
  *   description: The emp managing API
  */

/**
 * @swagger
 * /emp:
 *   get:
 *     summary: Returns the list of all the emp
 *     tags: [Emp]
 *     responses:
 *       200:
 *         description: The list of the emp
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emp'
 */

app.get('/emp', (req, res) => {
  res.send('')
})

/**
 * @swagger
 * /emp:
 *   post:
 *     summary: Create a new emp
 *     tags: [Emp]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emp'
 *     responses:
 *       200:
 *         description: The emp was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Emp'
 *       500:
 *         description: Some server error
 */
app.post('/emp', (req, res) => {
})

app.put('/', (req, res) => {
  const { name, age, location } = req.body;
  res.send(`Mi nombre es ${name} tengo ${age} años y vivo en ${location}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})