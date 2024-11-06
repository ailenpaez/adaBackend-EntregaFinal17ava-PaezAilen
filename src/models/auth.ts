import sequelize, { DataTypes } from "../database/connect";
import User from "./users";

const Auth = sequelize.define("Auth", {
    authId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: "userId",
        },
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: { 
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true,
    tableName: "Auth",
});

export default Auth;
