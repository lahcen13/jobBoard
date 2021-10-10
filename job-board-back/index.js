
const express = require('express')
const db = require('./config')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const token = require('./middleware/handleToken')
const { sign, check, getToken } = require('./functions/token')
const { get } = require('./functions/user')

//middleware
app.use(cors())
app.use((req, res, next) => token(req, res, next, ['/login', '/register', '/adverts', '/company', '/applied']))
// app.use((req, res, next) => handleUser(req, res, next, db, ['/login', '/register']))
app.use(express.json())
//-------


db.connect((err) => {
    if (err) throw err
    console.log('Database connected')
})

app.get('/admin/select', (req, res) => {
    if (req.query.table == 'advertisements') {
        sql = "title, published, salary, date, description, activity"
    } else if (req.query.table == 'companies') {
        sql = "name, contact_name, number_employes, website, email, phone, city, postal_code, address, activities"
    } else {
        sql = "first_name, name, email, phone, city, postal_code,address, gender, birth_date, role,cv, picture"
    }
    db.query(`SELECT ${sql} FROM ${req.query.table} where id='${req.query.id}' `, (error, response) => {
        if (error) throw error
        res.status(200).send(response)
    })
})

app.get('/admin/user', (req, res) => {
    if (req.query.list) {
        sql = 'id, concat(name," ",first_name) as `full_name`'
    } else {
        sql = 'count(*) as `count_people`'
    }
    db.query(`SELECT ${sql} FROM people `, (error, response) => {
        if (error) throw error
        res.status(200).send(response)
    })
})

app.post('/admin/update/user', (req, res) => {

})



app.get('/admin/adverts', (req, res) => {
    if (req.query.list) {
        sql = 'id, title as `full_name` '
    } else {
        sql = 'count(*) as `count_adverts`'
    }
    db.query(`SELECT ${sql} FROM advertisements `, (error, response) => {
        if (error) throw error
        res.status(200).send(response)
    })
})


app.get('/admin/companies', (req, res) => {
    if (req.query.list) {
        sql = 'id, name as `full_name` '
    } else {
        sql = 'count(*) as `count_companies` '

    }
    db.query(`SELECT ${sql} FROM companies `, (error, response) => {
        if (error) throw error
        res.status(200).send(response)
    })
})

app.get('/admin/delete', (req, res) => {
    db.query(`delete from ${req.query.table} where id='${req.query.id}' `, (error, response) => {
        if (error) throw error
        res.status(200).send(response)
    })
})

app.get('/company', (req, res) => {
    if (!req.query.id) return res.status(406).send('id_not_provided')

    db.query('SELECT * FROM companies WHERE id = ?', [req.query.id], (error, response) => {
        if (error) throw error
        res.status(200).send({ ...response[0] })
    })
})

app.put('/company/update', (req, res) => {
    const { name, contact_name, number_employes, website, email, phone, city, postal_code, address, activities } = req.body;
    const prepare = [name, contact_name, number_employes, website, email, phone, city, postal_code, address, activities]
    db.query(`select email from  companies where email="${req.body.email}" and id not like  "${req.body.id}"`, (err, emails) => {
        if (err) throw err
        if (emails.length == 0) {
            const queryString = `UPDATE companies SET name = ? , contact_name = ? , number_employes = ? , website = ? , email = ? , phone = ? , city = ? , postal_code = ?, address = ?, activities = ?  WHERE id ='${req.body.id}'`
            db.query(queryString, prepare, (error, results) => {
                if (error) throw error
                res.status(200).send("success");
            })
        } else {
            res.status(406).send('email_exist');
        }
    })
})

app.get('/adverts', (req, response) => {
    db.query('SELECT * FROM advertisements where published=1 order by date desc', (err, res) => {
        if (err) throw err
        response.status(200).send(res)
    })
})
app.put('/adverts/update', (req, res) => {
    const { title, published, salary, date, description, activity } = req.body;
    const prepare = [title, published, salary, date, description, activity]
    const queryString = `UPDATE advertisements SET title = ? , published = ? , salary = ? , date = ? , description = ? , activity = ? WHERE id ='${req.body.id}'`
    db.query(queryString, prepare, (error, results) => {
        if (error) throw error
        res.status(200).send("success");
    })
})


app.post('/login', (req, response) => {
    if (!req.body || !req.body.password || !req.body.email) {
        response.status(406).send('field_missing')
    }
    db.query(`SELECT * FROM people WHERE email="${req.body.email}"`, (err, res) => {
        if (res.length > 0) {
            bcrypt.compare(req.body.password, res[0].password_, function (err, result) {
                if (result) {
                    var token = sign(res[0].role, res[0].id, res[0].email)
                    response.status(200).send({ token: token, user: { id: res[0].id, email: res[0].email } });
                } else {
                    response.status(401).send("wrong_password")
                }
            });
        } else {
            response.status(401).send("wrong_email")
        }
    })
})

app.post('/applied', (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.motivation || !req.body.advertID || !req.body.file || !req.body.email || !req.body.phone) {
        return res.status(406).send('missing_field')
    }
    db.query('SELECT COUNT(*), id, password_ FROM people WHERE email = ?', [req.body.email], (err, result) => {
        if (err) {
            console.error(err)
        }
        if (result[0].password_ && check(getToken(req)) === 'no_permission') {
            return res.status(401).send('need_connexion')

        }
        if (check(getToken(req)) !== 'no_permission') {
            if (get(req).email !== req.body.email) return res.status(401).send('wrong_email')
        }
        const id = result[0].id
        const apply = (id) => {
            return db.query('SELECT COUNT(*) FROM applied WHERE people_id = ? AND advertisement_id = ?', [id, req.body.advertID], (err, resultSelectApply) => {
                if (err) throw err
                if (resultSelectApply[0]['COUNT(*)'] !== 0) return res.status(406).send('already_applied')
                return db.query('INSERT INTO applied (people_id, advertisement_id, motivation_people) VALUES (?, ?, ?)', [id, req.body.advertID, req.body.motivation], (err, insertApply) => {
                    if (err) throw err
                    if (insertApply) return res.status(200).send('success')
                })
            })
        }
        if (err) throw err
        if (result[0]["COUNT(*)"] !== 0) {
            db.query('UPDATE people SET phone = ?, name = ?, first_name = ?, cv = ? WHERE email = ?', [req.body.phone, req.body.lastName, req.body.firstName, req.body.cv, req.body.email], (err, updateResult) => {
                if (err) throw err
                return apply(id)
            })
        } else {
            db.query('INSERT INTO people (email, name, first_name, cv, phone) VALUES (?, ?, ?, ?, ?)', [req.body.email, req.body.lastName, req.body.firstName, req.body.file, req.body.phone], (err, insertResult) => {
                if (err) throw err
                return apply(insertResult.insertId)
            })
        }
    })

    // db.query("INSERT INTO people (first_name, name, cv, email, phone) VALUES (?, ?, ?, ?, ?)", user, (error, result) => {
    //     if (error) throw error
    // const userID = result.insertID
    // })


    const application = {
        motivation: req.body.motivation
    }


})


app.get('/applied', (req, res) => {
    const id = req.query.id
    if (!id) return res.status(406).send('missing_field');
    db.query('SELECT  companies.id as "idCompanie", advertisements.id, advertisements.title, advertisements.description, advertisements.date, companies.name  FROM advertisements inner join applied on advertisements.id = applied.advertisement_id inner join companies on companies.id=advertisements.companie_id WHERE people_id = ?', [id], (error, response) => {
        if (error) throw error;
        if (response.length === 0) return res.status(404).send('no_data')
        return res.status(200).send(response.map(el => el))
    })
})

//USER RELATED REQUESTS

app.get('/user', (req, res) => {
    const user = get(req)
    if (user) {
        db.query('SELECT id, first_name , name, email, phone ,city, postal_code, address, gender, cv FROM people WHERE email = ?', [
            user.email
        ], (error, response) => {
            if (error) throw error
            if (response.length === 0) {
                return res.status(404).send('user_not_found')
            }
            return res.status(200).send(response[0])
        })
    } else {
        return res.status(406).send("email_field_missing")
    }
})

app.delete('/user', (req, res) => {
    const user = req.query.id
    if (!user) return res.status(406).send("id_not_provided")
    db.query('DELETE FROM people WHERE id = ? ', [user], (error, response) => {
        if (error) throw error
        if (response.affectedRows === 0) return res.status(404).send('user_not_found')
        if (response.affectedRows === 1) return res.status(200).send("user_deleted")
        return res.status(500).send('unhandled_error')
    })
})


app.put('/user', (req, res) => {
    const {
        id,
        name,
        first_name,
        email,
        address,
        postal_code,
        city,
        phone,
        gender,
    } = req.body;
    const prepare = [
        name,
        first_name,
        email,
        address,
        postal_code,
        city,
        phone,
        gender,
        role
    ]
    db.query(`select email from  people where email="${req.body.email}" and id not like  "${req.body.id}"`, (err, userList) => {
        if (err) throw err
        if (userList.length == 0) {
            const queryString = `UPDATE people SET name = ? , first_name = ? , email = ? , address = ? , postal_code = ? , city = ? , phone = ? , gender = ? WHERE email ='${req.body.email}'`
            db.query(queryString, prepare, (error, results) => {
                if (error) throw error
                res.status(200).send("success");
            })
        } else {
            res.status(406).send('email_exist');
        }
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