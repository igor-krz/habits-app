const express = require("express");
const router = express.Router();
const Users = require("../habitdb/queries");

router.get("/usernames", (req, res, next) => {
  let usernames = Users.getUsernames();
  console.log(usernames);
  res.send(usernames);
});
router.post("/signup", (req, res, next) => {
  const user = req.body;
  const username = req.body.username;
  Users.getSingle(username).then((found) => {
    if (found) {
      res.json("username already present");
    } else {
      Users.hashPassword(user.password_digest)
        .then((hashedPassword) => {
          delete user.password;
          user.password_digest = hashedPassword;
        })
        .then(() => Users.createToken())
        .then((token) => (user.token = token))
        .then(() => Users.add(user))
        .then((user) => {
          delete user.password_digest;
          res.status(201).json({ message: "Signup Complete!" });
        })
        .catch((err) => console.error(err));
    }
  });
});

router.post("/signin", (req, res, next) => {
  const userReq = req.body;
  let user;
  Users.getSingle(userReq.username)
    .then((foundUser) => {
      user = foundUser;
      return Users.checkPassword(userReq.password_digest, foundUser);
    })
    .then((res) => Users.createToken())
    .then((token) => Users.updateUserToken(token, user.username))
    .then(() => {
      delete user.password_digest;
      const userInfo = {
        user_id: user.user_id,
        userName: user.name,
        userSurname: user.surname,
      };
      res.status(200).json({ userInfo });
    })
    .catch((err) => console.error(err));
});

router.put("/:username", (req, res, next) => {
  if (req.body.hasOwnProperty("username") || req.body.hasOwnProperty("id")) {
    return res.status(422).json({
      error: "You cannot update username or id field",
    });
  }
  Users.update(req.params.username, req.body)
    .then(function () {
      return Users.getSingle(req.params.username);
    })
    .then(function (showUser) {
      res.status(200).json(showUser);
    })
    .catch(function (error) {
      next(error);
    });
});

router.delete("/:username", (req, res, next) => {
  Users.getSingle(req.params.username)
    .then(function (showUser) {
      Users.remove(req.params.username)
        .then(function () {
          res.status(200).json(showUser);
        })
        .catch(function () {
          next(error);
        });
    })
    .catch(function (error) {
      next(error);
    });
});

module.exports = router;
