exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("habitTable")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("habitTable").insert([
        {
          userId: 1,
          habitName: " Sleepune",
          frequency: 10,
          complete: "yes",
        },
        {
          userId: 2,
          habitName: " Sleep",
          frequency: 1,
          complete: "no",
        },
        {
          userId: 2,
          habitName: " Water",
          frequency: 1,
          complete: "yes",
        },
      ]);
    });
};
