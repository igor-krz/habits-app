exports.up = function (knex, Promise) {
  return knex.schema.createTable("habitTable", (table) => {
    table.increments("habit_id").primary();
    //table.foreign("id").references("userTable.userId");
    table.string("habitName", 256).notNullable();
    table.string("frequency", 255).notNullable();
    table.text("description").notNullable();
    table.specificType("complete", "text[]");
    table.string("current_streak").notNullable();
    table.string("highest_streak").notNullable();
    table
      .integer("userId")
      .unsigned()
      .references("user_id")
      .inTable("userTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("habitTable");
};
