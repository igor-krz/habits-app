const knex = require('./knex.js');
const bcrypt = require('bcrypt');                      // bcrypt will encrypt passwords to be saved in db
const crypto = require('crypto');

function Users(){
    return knex('userTable')
}

function Habits() {
    return knex('habitTable') 
}

function getUserHabits(userid) {
    return Habits().where('userId', (userid));
}

function addHabit(habit) {
    return Habits().insert(habit, 'userId');
};

// function deleteHabit(userId, habitId){
//     return Habits().where({userId: userId , habit_id:habitId}).del();
// }
function deleteHabit(userId, habit_id) {
    return Habits().where('userId', (userId)).where('habit_id',(habit_id)).del();
}

function updateHabit(habit, updates) {
    return Habits().where('habit_id', (habit)).update(updates)
}

function update(username, updates) {
    return Users().where('username', (username)).update(updates);
}

const hashPassword = (password) => {
 return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
        err ? reject(err) : resolve(hash)
    })})
}

const createToken = () => {
   return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, data) => {
            err ? reject(err) : resolve(data.toString('base64'))
        })
    })
}
const checkPassword = (reqPassword, foundUser) => {
  return  new Promise((resolve, reject) => {
    bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
        if (err) {
            reject(err)
        } else if (response) {
            resolve(response)
        }else {
            reject(new Error('Passwords do not match'))
        }
    })})
}

const updateUserToken = (token, username) => {
    return Users().where({ username: username }).update({ token: token })
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
    remove: remove,
    hashPassword: hashPassword,
    createToken:createToken,
    checkPassword:checkPassword,
    updateUserToken:updateUserToken,
    getUserHabits:getUserHabits,
    addHabit:addHabit,
    deleteHabit:deleteHabit,
    updateHabit:updateHabit
}