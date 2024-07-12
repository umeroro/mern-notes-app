const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authheader = req.headers['authorization'];
    const token = authheader && authheader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error('JWT verification failed:', err.message);
            return res.sendStatus(401); 
        }
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken,
};
