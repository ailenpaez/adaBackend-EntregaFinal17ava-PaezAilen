import User from "./users";
import Signature from "./signatures";
import Enrollment from "./enrollments";

const defineAssociations = () => {
    // User a muchos Enrollments
    User.hasMany(Enrollment, {
        foreignKey: "userId",
        as: "enrollments",
    });

    // Class a muchos Enrollments
    Signature.hasMany(Enrollment, {
        foreignKey: "classId",
        as: "enrollments",
    });

    // Enrollment a un User
    Enrollment.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    //Enrollment a una Class
    Enrollment.belongsTo(Signature, {
        foreignKey: "signatureId",
        as: "signature",
    });
};


export {User, Signature, Enrollment}


