exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("userTable")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("userTable").insert([
        {
          name: "Harry",
          surname: " Dune",
          username: "Sport",
          token: "c6CHGGe7sikcw+D4PYeTKA==",
          password_digest: "$2b$10$hgWygaQ/xP/zLT8wlwzhM.VX3S0MMRtuSYupkCjRJGpNKJM9bt8wW",
          created_at: "2020-05-18 22:45:34.416717+01"
        },
        {
          name: "James",
          surname: " Potter",
          username: "harrypotter",
          token: "Kj3s86QhVtahw26BHw+Sxw==",
          password_digest: "$2b$10$m1i8PVUbYg/R84j2bofOO.G83VpQmfipN6JUi2WY7wZRWDPlHgE82",
          created_at: "2020-05-18 22:46:44.720129+01"
        },
      ]);
    });
};
