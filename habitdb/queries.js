const knex = require('./knex.js');

function Users(){
    return knex('userTable')
}

function getSingle(username) {
    return Users().where('username', (username)).first();
}

function add(user) {
    return Users().insert(user, 'user_id');
}

function update(username, updates) {
    return Users().where('username', (username)).update(updates);
}

function remove(username) {
    return Users().where('username', (username)).del();
}

module.exports = {
    getSingle: getSingle,
    add: add,
    update: update,
    remove: remove
}