import sequelize, { DataTypes } from "../database/connect";

const Signature = sequelize.define("Signature", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true, //!pk
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    syllabus: {
        type: DataTypes.TEXT, //^ ACÁ IRIA UNA URL DE DRIVE PARA LOS TEMARIOS
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false, //  OBLI
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false, // OBLI
    },
}, {
    timestamps: true,
    tableName: "Signatures",
});

export default Signature; 
