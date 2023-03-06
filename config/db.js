import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "arfin",
    password: "arfin",
    port: 3306,
    database: "starter",
  },
});

export { pool };
