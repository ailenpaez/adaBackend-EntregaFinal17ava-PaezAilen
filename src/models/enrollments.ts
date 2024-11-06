import sequelize, { DataTypes } from "../database/connect";
import User from "./users";
import Signature from "./signatures";

const Enrollment = sequelize.define("Enrollment", {
    enrollmentId: {
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
    signatureId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Signature,
            key: "signatureId",
        },
    },
}, {
    timestamps: true,
    tableName: "Enrollments",
});

export default Enrollment;
