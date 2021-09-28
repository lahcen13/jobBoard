const express = require('express')
const db = require('./config')
const app = express()
const PORT = process.env.PORT || 5000


db.connect((err) => {
    if (err) throw err
    console.log('Database connected')
})

app.get('/adverts', (req, res) => {
    db.query('SELECT * FROM advertisements', (err, res) => {
        if (err) throw err
        console.log(res)
    })
})


app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
})