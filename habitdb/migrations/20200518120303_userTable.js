exports.up = function (knex, Promise) {
  return knex.schema.createTable("userTable", (table) => {
    table.increments("user_id").primary();
    table.string("name", 256).notNullable();
    table.string("surname", 256).notNullable();
    table.text("username", 128).notNullable().unique();
    table.text("token").notNullable();
    table.text("password_digest").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());

  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("userTable");
};
