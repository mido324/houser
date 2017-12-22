const users = require('../models/users');

module.exports = {
    create: (req, res, next) => {
        let {
            propertyname,
            propertydescription,
            address,
            city,
            zip,
            state,
            img,
            loan,
            monthlymortgage,
            desiredrent,
            userid
        } = req.body;
        req
            .app
            .get('db')
            .create_property(
                propertyname,
                propertydescription,
                address,
                city,
                zip,
                state,
                img,
                loan,
                monthlymortgage,
                desiredrent,
                userid
            )
            .then(property => {
                res
                    .status(200)
                    .send(property);
            })
            .catch(err => console.log(err));

    },
    get: (req, res, next) => {
        let {userid} = req.session.user.id;
        req
            .app
            .get('db')
            .get_property(userid)
            .then(properties => {
                res
                    .status(200)
                    .send(properties);
            })
            .catch(err => console.log(err));
    },
    delete: (req, res, next) => {
        const {id} = req.params;
        req
            .app
            .get('db')
            .delete_property(id)
            .then(property => {
                res
                    .status(200)
                    .send("property deleted");
            })
            .catch(err => console.log(err));
    },
    filter: (req, res, next) => {
        let {userid} = req.session.user.id;
        req
            .app
            .get('db')
            .filter_property(userid)
            .then(properties => {
                res
                    .status(200)
                    .send(properties);
            })
    }
}