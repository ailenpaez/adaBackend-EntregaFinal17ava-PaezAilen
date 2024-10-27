import sequelize, { DataTypes } from "../database/connect";
import User from "./users";

const Auth = sequelize.define("Auth", {
    authId: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.STRING ,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: "userId",
        },
        unique: true,
    },
    hashedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: "Auth",
});

export default Auth;
