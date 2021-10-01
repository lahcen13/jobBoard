
const express = require('express')
const db = require('./config')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 5000

const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const token = require('./middleware/token')

//middleware
app.use((req, res, next) => token(req, res, next, ['/login', '/register']))
app.use(express.json())
app.use(cors())
//-------


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

app.get('/user', (req, res) => {
    const user = req.query.email
    console.log(req.query)
    if (user) {
        db.query('SELECT * FROM people WHERE email = ?', [
            user
        ], (error, response) => {
            if (error) throw error
            if (response.length === 0) {
                return res.status(404).send('user_not_found')
            }
            return res.status(200).send(response[0])
        })
    }else {
        return res.status(406).send("email_field_missing")
    }
})


app.delete('/user', (req, res) => {
    const user = req.query.id
    if (!user) return res.status(406).send("id_not_provided")
    db.query('DELETE FROM people WHERE id = ? ',[user], (error, response) => {
        if (error) throw error
       if (response.affectedRows === 0) return res.status(404).send('user_not_found')
       if (response.affectedRows === 1) return res.status(200).send("user_deleted")
       return res.status(500).send('unhandled_error')
    })
})


app.put('/user', (req, res) => {
    const {
        name,
        firstName,
        email,
        address,
        postal_code,
        city,
        phone,
        birth_date,
        cv,
        picture,
        gender
    } = req.body;


    const prepare  = [
        name,
        firstName,
        email,
        address,
        postal_code,
        city,
        phone,
        birth_date,
        cv,
        picture,
        gender
    ]
    const queryString = `UPDATE people SET name = ? , first_name = ? , email = ? , address = ? , postal_code = ? , City = ? , phone = ? , birth_date = ? , cv = ? , picture = ? , gender = ? WHERE email ='${req.body.email}'`
    db.query(queryString, prepare, (error, results) => {
        if (error) throw error
        return res.status(200).send('data_updated')
    })
      
    
})

app.post('/register', (req, response) => {
    if (!req.body || !req.body.firstName || !req.body.lastName || !req.body.password || !req.body.email) {
       return response.status(406).send('field_missing')
    }
    db.query(`select email from  people where email="${req.body.email}"`, (err, res) => {
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