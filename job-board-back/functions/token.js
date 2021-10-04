var jwt = require('jsonwebtoken');




 /**
  * @param {string} role the user role, can be admin or user
  * @param {number} userID the user id from the database
  * @param {string} email the email of the user
  * @returns token
  */
const sign = (role, userID, email) => {
    
    return jwt.sign({userID, email, role}, process.env.SECRET)
}

/**
 * @param {string} token 
 * @returns payload
 */
const check = (token) => {
    return jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return 'no_permission'
        return decoded
    })
}
/**
 * @param {string} token 
 * @returns payload
 */
const getPayload = (token) => {
return jwt.decode(token)
}

const getToken = (request) => {
    return request.headers.authorization.split(' ')[1]
}


/**
 * @param {string} request 
 * @returns token
 */
const token = {
    sign,
    check,
    getPayload,
    getToken

}
module.exports = token