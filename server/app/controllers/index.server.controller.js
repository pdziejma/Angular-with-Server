var Animal = require('mongoose').model('Animal');

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    Animal.find({}, function(err, animals) {
        if (err) {
            return next(err);
        } else {
            res.render('index', {});
        }
    });

    req.session.lastVisit = new Date();
};