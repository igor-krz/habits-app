exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("habitTable")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("habitTable").insert([
      
        {
          userId: 2,
          habitName: " Sleep",
          frequency: "1",
          complete:['14-04-2020','06-05-2020', '19-05-2020'],
          current_streak:'19-05-2020-7',
          highest_streak:'19-05-2020-7'
        },
        {
          userId: 2,
          habitName: " Water",
          frequency: "1",
          complete: ['13-04-2020','06-05-2020', '07-05-2020'],
          current_streak:'19-05-2020-0',
          highest_streak:'15-05-2020-7'
        },
      ]);
    });
}; 
