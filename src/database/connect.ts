import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DB_URI);

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log("CONNECTION_HAS_BEEN_ESTABLISHED_SUCCESSFULLY :)");
//     } catch (error) {
//         console.error("UNABLE_TO_CONNECT_TO_DATABASE :(", error);
//     }
// })();

sequelize.sync({force: true});

export { DataTypes };
export default sequelize;