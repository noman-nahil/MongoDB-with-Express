const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) res.status(401).send('Access denied. No token provided!');
    token = token.split(" ")[1].trim();
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.mySecretKey);
        req.user = decoded;
        console.log("Authorization:", req.user)
        next();
    } catch (err) {
        return res.status(400).send('Invalid token');
    }

}