const {contact} = require("../models");

class Contact {
    static add(req, res, next) {
        console.log(req.body);
        contact.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            number: req.body.number
        }).then(response => {
            res.status(202).json({
                message: "Data successfully added",
                data: response
            })
        }).catch(err => {
            next(err)
        })
    }

    static readAll(req, res, next) {
        contact.findAll()
            .then(response => {
                res.status(200).json({
                    data: response
                })
            }).catch(err => {
            next(err)
        })
    }

    static edit(req, res, next) {
        contact.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            number: req.body.number
        }, {
            where: {
                id: req.params.id
            }
        }).then(response => {
            res.status(200).json({
                message: "Data successfully updated",
                data: response
            })
        }).catch(err => {
            next(err)
        })
    }

    static delete(req, res, next) {
        contact.destroy({
            where: {
                id: req.params.id
            }
        }).then(response => {
            res.status(200).json({
                message: "Data successfully deleted",
                data: response
            })
        }).catch(err => {
            next(err)
        })
    }
}

module.exports = Contact;