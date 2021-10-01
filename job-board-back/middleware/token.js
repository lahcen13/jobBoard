module.exports = (req, res, next, exclude) => {
    const excludedRoutes = exclude.indexOf(req.path);
    if (excludedRoutes === -1) {
        const authorization = req.headers.authorization
        if (authorization) {
            const splitted = authorization.split(' ')
            if (splitted[0] === 'Bearer') {
                try {
                    jwt.verify(splitted[1], process.env.SECRET)
                } catch (err) {
                    console.error(err)
                    return res.status(401).end('wrong_token')
                }
            }
        } else {
            return res.status(401).end('token_not_provided')
        }
    }
    return next()
}