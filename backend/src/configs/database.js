import knex from "knex";

const database = knex({
  client: "mysql2",
  connection: { 
    host: "localhost",
    user: "root",
    password: "",
    database: "mavOutlet" //nome do database óbivo
  }
});

export { database };