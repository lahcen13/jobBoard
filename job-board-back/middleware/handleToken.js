var jwt = require('jsonwebtoken');
const { check, getPayload } = require('../functions/token');
module.exports = (req, res, next, arr) => {
    if (arr.includes(req.path)) return next()
const token = req.headers.authorization.split(' ')[1]
console.log('TOOOOOKEN', token)
const decoded = getPayload(token)
if (decoded.role === 'user' && req.path.startsWith('/company')) return res.status(401).send('company_reserved')
if (decoded.role === 'user' && req.path.startsWith('/admin') || decoded.role === 'company' && req.path.startsWith('/admin')) return res.status(401).send('admin_reserved')
if(decoded.role === 'admin') {
    const checked = check(token, decoded.role)
    if (checked === 'no_permission') {
       return res.status(401).send('bad_signature')
    }else {
       return next()
    }
}
if (decoded.role === 'user') {
    const checked = check(token, decoded.role)
    if (checked === 'no_permission') {
        return res.status(401).send('bad_signature')
    }else {
       return next()
    }
}

next()
}