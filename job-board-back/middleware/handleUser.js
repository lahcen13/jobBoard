const { getPayload, getToken } = require("../functions/token")
const { isValid } = require("../functions/user")
// const { isValid } = require("../functions/user")
/**
 * 
 * @param {any} request
 * @param {any} response
 * @param {Function} next
 * @param {Function} db
 * @param {array} arr array for route that must be excluded from user verification
 */
module.exports =async (req, res, next, db, arr) => {
    if (arr.includes(req.path)) return next()
    const token = getToken(req)
    const pl = getPayload(token)
    return isValid(pl.userID, pl.email, db, b => {
        if (b) return next()
        return res.status(401).send('invalid_provided_user_data')
    })
    
}