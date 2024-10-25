import sequelize, { DataTypes } from "../database/connect";

import {Signature, User} from ".";

const Enrollment = sequelize.define("Enrollment", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false, // OBLI
    references: {
      model: User,
      key: "id",
    },
  },
  signatureId: {
    type: DataTypes.UUID,
    allowNull: false, // OBLI
    references: {
      model: Signature,
      key: "id",
    },
  },
  enrollmentDate: {
    type: DataTypes.DATE,
    allowNull: false, // OBLI
  },
}, {
  timestamps: true,
  tableName: "Enrollments",
});

export default Enrollment;
