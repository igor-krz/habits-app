require("dotenv").config();
module.exports = {
  test: {
    client: "pg",
    connection: {
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASS,


      database: "habitdb_test",


    },
    migrations: {
      directory: __dirname + "/habitdb/migrations",
    },
    seeds: {
      directory: __dirname + "/habitdb/seeds/test",
    },
  },
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "habitdb",
    },
    migrations: {
      directory: __dirname + "/habitdb/migrations",
    },
    seeds: {
      directory: __dirname + "/habitdb/seeds/development",
    },
  },
  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      directory: __dirname + "/habitdb/migrations",
    },
    seeds: {
      directory: __dirname + "/habitdb/seeds/production",
    },
  },
};
