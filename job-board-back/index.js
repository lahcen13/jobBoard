
const express = require('express')
const db = require('./config')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const token = require('./middleware/handleToken')
const { sign, check, getToken, getPayload } = require('./functions/token')
const { get } = require('./functions/user')

//middleware
app.use(cors())
app.use((req, res, next) => token(req, res, next, ['/login', '/sectors', '/register/user', '/register/company', '/admin/login', '/company/login', '/adverts', '/company', '/applied']))
// app.use((req, res, next) => handleUser(req, res, next, db, ['/login', '/register']))
app.use(express.json())
//-------


db.connect((err) => {
    if (err) throw err
    console.log('Database connected')
})
app.post('/admin/login', (req, res) => {

    const password = req.body.data.password;
    const email = req.body.data.email

    console.log(req.body)

    db.query("SELECT email, role, id, password_ FROM people WHERE role='admin' AND email=?", [email], (error, response) => {
        if (error) return error
        if (response.length === 0) {
            return res.status(404).send('user_not_found')
        }
        const user = response[0]
        console.log(user)
        bcrypt.compare(password, user.password_).then((isSame) => {
            if (isSame) {
                console.log('GO')
                const token = jwt.sign({ role: user.role, email: user.email, id: user.id }, process.env.SECRET)
                return res.status(200).send({ token: token, user: { id: user.id, email: user.email } })
            }
            return res.status(401).send('bad_password')
        })
            .catch(err => console.log('error'))
    })
})

app.get('/admin/select', (req, res) => {
    if (req.query.table == 'advertisements') {
        sql = "id, title, published, salary, date, description"
    } else if (req.query.table == 'companies') {
        sql = "id, name, contact_name, number_employes, website, email, phone, city, postal_code, address"
    } else {
        sql = "id, first_name, name, email, phone, city, postal_code,address, gender, birth_date, role,cv, picture"
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
    const { siret, name, contact_name, number_employes, website, email, phone, city, postal_code, address } = req.body;
    var prepare = [siret, name, contact_name, number_employes, website, email, phone, city, postal_code, address,]

    db.query(`select email from  companies where email="${req.body.email}" and id not like  "${req.body.id}"`, (err, emails) => {
        if (err) throw err
        if (emails.length == 0) {
            const queryString = `UPDATE companies SET siret = ?,name = ? , contact_name = ? , number_employes = ? , website = ? , email = ? , phone = ? , city = ? , postal_code = ?, address = ?  WHERE id ='${req.body.id}'`
            db.query(queryString, prepare, (error, results) => {
                if (error) throw error
                res.status(200).send("success");
            })
        } else {
            res.status(406).send('email_exist');
        }
    })
})

app.post('/company/publish', (req, res) => {
    const { companie_id, salary, title, description, short_description } = req.body;
    var prepare = [title, salary, description, short_description, companie_id]
    db.query(`INSERT INTO advertisements (title,salary, description, short_description, companie_id) values( ? , ? , ? , ? , ?)`, prepare, (err, response) => {
        if (err) throw err
        res.status(200).send(response);
    })
})

app.get('/company/adverts', (req, res) => {
    db.query(`select * from  advertisements where companie_id="${req.query.id}"`, (err, response) => {
        if (err) throw err
        res.status(200).send(response);

    })
})

app.get('/company/adverts/delete', (req, res) => {
    db.query(`delete from advertisements where id="${req.query.id}"`, (err, response) => {
        if (err) throw err
        res.status(200).send(response);
    })
})

app.get('/company/adverts/user', (req, res) => {
    db.query(`select people.id , people.name, people.first_name, people.cv , applied.motivation_people from applied inner join people on people.id=applied.people_id where advertisement_id="${req.query.id}"`, (err, response) => {
        if (err) throw err
        res.status(200).send(response);
    })
})

app.get('/adverts', (req, response) => {
    console.log('sss')
    db.query('SELECT * FROM advertisements where published=1 order by date desc', (err, res) => {
        if (err) throw err
        console.log(res)
        response.status(200).send(res)
    })
})

app.put('/adverts/update', (req, res) => {
    const { title, published, salary, date, description } = req.body;
    const prepare = [title, published, salary, date, description]
    const queryString = `UPDATE advertisements SET title = ? , published = ? , salary = ? , date = ? , description = ?  WHERE id ='${req.body.id}'`
    db.query(queryString, prepare, (error, results) => {
        if (error) throw error
        res.status(200).send("success");
    })
})

app.post('/company/login', (req, response) => {
    console.log(req.body)
    if (!req.body.data || !req.body.data.password || !req.body.data.email) {
        return response.status(406).send('field_missing')
    }


    db.query(`SELECT * FROM companies WHERE email=?`, [req.body.data.email], (err, res) => {

        if (res.length > 0) {
            bcrypt.compare(req.body.data.password, res[0].password_, function (err, result) {
                if (result) {
                    var token = sign('company', res[0].id, res[0].email)
                    return response.status(200).send({ token: token, user: { id: res[0].id, email: res[0].email } });
                } else {
                    return response.status(401).send("bad_password")
                }
            });
        } else {
            return response.status(401).send("user_not_found")
        }
    })
})

app.post('/login', (req, response) => {
    console.log('requer')
    if (!req.body || !req.body.password || !req.body.email) {
        response.status(406).send('field_missing')
    }

    db.query(`SELECT id, password_, email FROM people WHERE role='user' AND email=?`, [req.body.email], (err, res) => {
        if (err) {
            return console.log(err)
        }
        console.log(res)
        if (res.length > 0) {
            bcrypt.compare(req.body.password, res[0].password_, function (err, result) {
                if (result) {

                    var token = sign('user', res[0].id, res[0].email)
                    return response.status(200).send({ token: token, user: { id: res[0].id, email: res[0].email } });

                } else {
                    return response.status(401).send("wrong_password")
                }
            });
        } else {
            return response.status(401).send("user_not_found")
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
            console.log(response.cv)
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
    const { birth_date, name, first_name, email, address, postal_code, city, phone, gender, role, cv, picture, id } = req.body;
    const prepare = [birth_date, name, first_name, email, address, postal_code, city, phone, gender, cv, picture, role]
    var Role = getPayload(getToken(req)).role;
    console.log(Role)
    db.query(`select email from  people where email="${req.body.email}" and id not like  "${req.body.id}"`, (err, userList) => {
        if (err) throw err
        if (userList.length == 0) {
            if (Role !== "admin") {
                var queryString = `UPDATE people SET birth_date= ? , name = ? , first_name = ? , email = ? , address = ? , postal_code = ? , city = ? , phone = ? , gender = ? WHERE email ='${req.body.email}'`;
            } else {
                var queryString = `UPDATE people SET birth_date= ? ,name = ? , first_name = ? , email = ? , address = ? , postal_code = ? , city = ? , phone = ? , gender = ? , cv= ? , picture= ?, role = ?  WHERE id ='${req.body.id}'`;
            }
            db.query(queryString, prepare, (error, results) => {
                if (error) throw error
                res.status(200).send("role changed");
            })
        } else {
            res.status(406).send('email_exist');
        }
    })
})

app.post('/register/user', (req, response) => {
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


app.post('/register/company', (req, response) => {
    if (!req.body || !req.body.name || !req.body.sector || !req.body.password || !req.body.email || !req.body.address || !req.body.postal_code || !req.body.number_employes || !req.body.phone || !req.body.website || !req.body.city || !req.body.siret) {
        return response.status(406).send('field_missing')
    }
    db.query(`select email, siret from companies where email="${req.body.email}" OR siret="${req.body.siret}"`, (err, res) => {
        if (err) throw err
        if (res.length == 0) {
            const myPlaintextPassword = req.body.password;
            bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {

                db.query(`insert into companies (name, password_, email, contact_name, sector, address, postal_code, city, siret, number_employes, website, phone)  values ("${req.body.name}","${hash}","${req.body.email}" ,"${req.body.contactName}" ,"${req.body.sector}" , "${req.body.address}" , "${req.body.postal_code}" ,"${req.body.city}" ,"${req.body.siret}","${req.body.number_employes}","${req.body.website}","${req.body.phone}" )`, (err, res) => {
                    if (err) throw err
                    return response.status(200).send('success')
                })
            });
        } else {
            if (req.body.siret === res[0].siret) {
                return response.status(406).send('siret_exist');
            }
            if (req.body.email === res[0].email) {
                return response.status(406).send('email_exist');
            }
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

app.get('/sectors', (req, response) => {
    db.query('SELECT * FROM sector ', (err, res) => {
        if (err) throw err
        response.status(200).send(res)
    })
})

app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
})

