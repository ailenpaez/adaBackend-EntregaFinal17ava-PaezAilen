import sequelize, { DataTypes } from "../database/connect";

const User = sequelize.define("User", {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 255],
                msg: "🚩The password must be at least 8 characters long.", 
            },
            is: {
                args: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
                msg: "🚨The password must include numbers, uppercase and lowercase letters, and special characters.",
            },
        },
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { 
            isEmail: {
                msg: "Must be a valid email address.",
            },
        },
    },
    birthdate: { 
        type: DataTypes.DATE, 
        allowNull: true 
    },
    nationality: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
}, {
    timestamps: false,
    tableName: "Users",
});

export default User;
