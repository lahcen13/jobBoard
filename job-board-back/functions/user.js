const { getPayload, getToken } = require("./token");

 /**
  * @param {number} id the user's ID
  * @param {string} email the user's email
  * @param {any} db the DB instance
  * @param {Function} callback
  * @returns 0 or 1
  */
const isValid = (id, email, db, callback) => {
    if (!id || !email) return callback(false);
    db.query('Select id FROM people WHERE id = ? AND email = ?', [id, email], (err, response) => {
        if (err) return callback(false)
        if (response.length > 0) return callback(true)
        return callback(false)
    })
}


 /**
  * @param {any} request
  * @returns user object
  */
const get = (req) => {
    const p = getPayload(getToken(req))
    return {
        email: p.email,
        userID: p.userID
    }
}

const user = {
    isValid,
    get
}

module.exports = user