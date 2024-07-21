import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.PGHOST as string,
  database: process.env.PGDATABASE as string,
  username: process.env.PGUSER as string,
  password: process.env.PGPASSWORD as string,
  dialect: "postgres",
  logging: false,
});

export default sequelize;
