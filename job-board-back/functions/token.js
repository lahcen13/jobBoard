var jwt = require('jsonwebtoken');




 /**
  * @param {string} role the user role, can be admin or user
  * @param {number} userID the user id from the database
  * @param {string} email the email of the user
  * @returns token
  */
const sign = (role, userID, email) => {
    if (role === 'admin') return jwt.sign({userID, email, role}, process.env.ADMIN_SECRET)
    return jwt.sign({userID, email, role}, process.env.SECRET)
}

/**
 * 
 * @param {string} token 
 * @param {string} role
 * @returns payload
 */
const check = (token, role) => {
    if (role === 'admin') return jwt.verify(token, process.env.ADMIN_SECRET, (err, decoded) => {
        if (err) return 'no_permission'
        return decoded
    })
    return jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return 'no_permission'
        return decoded
    })
}
/**
 * 
 * @param {string} token 
 * @returns payload
 */
const getPayload = (token) => {
return jwt.decode(token)
}



const token = {
    sign,
    check,
    getPayload

}
module.exports = token