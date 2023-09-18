const jwt = require('jsonwebtoken');
const config = require('./config/jwt');

module.exports = {
    authenticateToken: (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) {
            return res.sendStatus(401);
        }

        jwt.verify(token, config.jwtSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    },
};
