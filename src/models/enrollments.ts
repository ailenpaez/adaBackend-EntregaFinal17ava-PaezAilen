import sequelize, { DataTypes } from "../database/connect";
import User from "./users";
import Signature from "./signatures";

const Enrollment = sequelize.define("Enrollment", { //!TABLA INTERMEDIA
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.STRING ,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: User, key: "userId" },
  },
  signatureId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: Signature, key: "signatureId" },
  },
}, {
  timestamps: false,
  tableName: "Enrollments",
});


export default Enrollment;
