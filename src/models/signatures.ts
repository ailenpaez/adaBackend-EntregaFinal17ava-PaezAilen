import sequelize, { DataTypes } from "../database/connect";

const Signature = sequelize.define("Signature", {
    signatureId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    syllabus: { type: DataTypes.TEXT, allowNull: false }, //^ ACÁ IRIA UNA URL DE DRIVE PARA LOS TEMARIOS
    startDate: { type: DataTypes.DATE, allowNull: false },
    endDate: { type: DataTypes.DATE, allowNull: false },
}, {
    timestamps: false,
    tableName: "Signatures",
});

export default Signature;