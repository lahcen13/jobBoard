
const express = require('express')
const db = require('./config')
const app = express()

// from where we want the request
const cors = require('cors')

const PORT = process.env.PORT || 5000
app.use(cors())
//cryptdata
const bcrypt = require('bcrypt');
const saltRounds = 10;

//token
var jwt = require('jsonwebtoken');


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

app.post('/login', (req, response) => {
    if (!req.body || !req.body.password || !req.body.email) {
        response.status(406).send('field_missing')
    }
    db.query(`SELECT * FROM people WHERE email="${req.body.email}"`, (err, res) => {
        if (res.length > 0) {
            console.log(req.body.password);
            console.log(res[0]['password_']);
            bcrypt.compare(req.body.password, res[0].password_, function (err, result) {
                if (result) {
                    var token = jwt.sign({ email: req.body.email, id: res[0].id }, process.env.SECRET);
                    response.status(200).send(token);
                } else {
                    response.status(401).send("wrong_password")
                }
            });
        } else {
            response.status(401).send("wrong_email")
        }
    })
})

app.post('/register', (req, response) => {
    if (!req.body || !req.body.firstName || !req.body.lastName || !req.body.password || !req.body.email) {
        response.status(406).send('field_missing')
    }
    const ligne = db.query(`select email from  people where email="${req.body.email}"`, (err, res) => {
        if (err) throw err
        if (res.length == 0) {
            const myPlaintextPassword = req.body.password;
            bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
                db.query(`insert into people (first_name , name, password_ ,email)  values ("${req.body.firstName}","${req.body.lastName}","${hash}","${req.body.email}")`, (err, res) => {
                    if (err) throw err
                    response.status(200).send('success');
                })
            });
        } else {
            response.status(406).send('email_exist');
        }
    })
})





app.get('/filter', (req, response) => {
    if (!req.body && !req.body.domaine && !req.body.city && !req.body.company && !req.body.salaireMin && !req.body.salaireMax) {
        response.status(406).send('field_missing')
    }
    //Filtre activity
    { req.body.domaine !== null ? domaine = `advertisements.activity="${req.body.domaine}" ` : domaine = "" }
    //Filtre company city 
    { req.body.city !== null ? city = `and companies.city="${req.body.city}" ` : city = "" }
    //Filtre company id
    { req.body.company !== null ? company = `and companies.id="${req.body.company}" ` : company = "" }
    //Filtre salary
    { req.body.salaireMin !== null && req.body.salaireMax !== null ? salaire = `and salary between "${req.body.salaireMin}" and "${req.body.salaireMax}" ` : salaire = "" }

    const sql = `SELECT advertisements.id, advertisements.title, advertisements.description, advertisements.date, advertisements.salary, advertisements.activity FROM advertisements inner join companies on advertisements.companie_id=companies.id where published=1 and ` + domaine + city + company + salaire
    db.query(sql, (err, res) => {
        if (err) throw err
        if (res) {
            response.status(200).send(res)
        } else {
            response.status(406).send('email_exist');
        }
    })
})

app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
})