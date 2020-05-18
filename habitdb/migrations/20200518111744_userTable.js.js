exports.up = function (knex) {
  return knex.schema.createTable("userTable", (table) => {
    table.increments("id").primary();
    table.string("name", 256).notNullable();
    table.string("surname", 128).notNullable();
    table.string("username", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("userTable");
};
