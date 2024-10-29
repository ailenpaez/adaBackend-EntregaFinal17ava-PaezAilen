import User from "./users";
import Signature from "./signatures";
import Enrollment from "./enrollments";
import Auth from "./auth";

const defineAssociations = () => {
    User.hasOne(Auth, { foreignKey: "userId", as: "auth" });
    Auth.belongsTo(User, { foreignKey: "userId", as: "user" });

    // User.belongsToMany(Signature, {through: Enrollment})
    // Signature.belongsToMany(User, {through: Enrollment}) ///userid_user_user_id ?????

    User.belongsToMany(Signature, { through: Enrollment, foreignKey: "userId", otherKey: "signatureId", as: "signatures" });
    Signature.belongsToMany(User, { through: Enrollment, foreignKey: "signatureId", otherKey: "userId", as: "users" });
    
};

export { User, Signature, Enrollment, Auth };
export default defineAssociations;
