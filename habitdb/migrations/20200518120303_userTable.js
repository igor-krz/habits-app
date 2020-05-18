exports.up = function (knex, Promise) {
  return knex.schema.createTable("userTable", (table) => {
    table.increments("user_id").primary();
    table.string("name", 256).notNullable();
    table.string("surname", 256).notNullable();
    table.string("username", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("userTable");
};
