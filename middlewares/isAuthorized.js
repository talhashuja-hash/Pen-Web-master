const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']

    if (token == null) return res.status(401).json({ message: "unauthorized" })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
       

        if (err) return res.status(403).json(err)

        req.user = user

        next()
    })
}
module.exports = authenticateToken