exports.up = function (knex, Promise) {
  return knex.schema.createTable("habitTable", (table) => {
    table.increments("habit_id").primary();
    //table.foreign("id").references("userTable.userId");
    table.string("habitName", 256).notNullable();
    table.string("frequency", 255).notNullable();
    table.string("complete", 255).notNullable();
    table.integer("userId").unsigned().references("user_id").inTable("userTable");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("habitTable");
};
