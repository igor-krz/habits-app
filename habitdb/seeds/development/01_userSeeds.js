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
        },
        {
          name: "James",
          surname: " Potter",
          username: "harrypotter",
        },
        {
          name: "Mary",
          surname: " Poppins",
          username: "idkname",
        },
        {
          name: "Rachel ",
          surname: "Ross",
          username: "Friends",
        },
      ]);
    });
};
