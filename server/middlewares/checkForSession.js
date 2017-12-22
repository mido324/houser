module.exports = function (req, res, next) {
    if (!req.session.user) {
        req.session.user = {
            username: '',
            properties: []
        }
    }
next(); // simulation -2   75E
}; // simulation -2 43K