import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DB_URI);

sequelize.sync({ alter: true });

export { DataTypes };
export default sequelize;