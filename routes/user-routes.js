const express = require('express');
const router = express.Router();
const Users = require('../habitdb/queries');

router.get('/:username', (req, res) => {
    Users.getSingle(req.params.username)
    .then(function(showUser) {
        res.status(200).json(showUser);
    })
    .catch(error => {
        res.status(500).json({message: "cannot retrieve user"})
    });
});

router.post('/habits', (req, res, next) => {
    Users.add(req.body)
    .then(function(userID) {
        return Users.getSingle(userID);
    })
    .then(function(showUser) {
        res.json(showUser);
    })
    .catch(function(error) {
        next(error);
    });
});

router.put('/:username', (req, res, next) => {
    if(req.body.hasOwnProperty('username') || req.body.hasOwnProperty('id'))  {
        return res.status(422).json({
            error: "You cannot update username or id field"
        });
    }
    Users.update(req.params.username, req.body)
    .then(function() {
        return Users.getSingle(req.params.username);
    })
    .then(function(showUser) {
        res.status(200).json(showUser);
    })
    .catch(function(error){
        next(error);
    });
});


router.delete('/:username', (req, res, next) => {
    Users.getSingle(req.params.username)
    .then(function(showUser) {
        Users.remove(req.params.username)
        .then(function() {
            res.status(200).json(showUser)
        })
        .catch(function() {
            next(error);
        });
    }).catch(function(error){
        next(error);
    });
});



module.exports = router;