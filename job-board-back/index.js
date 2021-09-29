const express = require('express')
const db = require('./config')
const app = express()
const crypto = require('crypto');
const PORT = process.env.PORT || 5000

app.use(express.json())

db.connect((err) => {
    if (err) throw err
    console.log('Database connected')
})

app.get('/adverts', (req, response) => {
    db.query('SELECT * FROM advertisements', (err, res) => {
        if (err) throw err
        response.status(200).send(res)
    })
})

app.post('/login', (req, res) => {
    console.log(req.body.email)
   if (!req.body || !req.body.password || !req.body.email) {
       res.status(406).send('field_missing')
   }
   db.query(`SELECT * FROM people WHERE email="${req.body.email}"`, (err, res) => {
       if (err) throw err
       console.log(res)
   })
})


app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
})