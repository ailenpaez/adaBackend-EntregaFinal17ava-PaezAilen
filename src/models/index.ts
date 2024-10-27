import User from "./users";
import Signature from "./signatures";
import Enrollment from "./enrollments";
import Auth from "./auth";

const defineAssociations = () => {
    User.hasOne(Auth, { foreignKey: "userId", as: "auth" });
    Auth.belongsTo(User, { foreignKey: "userId", as: "user" });

    User.belongsToMany(Signature, {through: Enrollment})
    Signature.belongsToMany(User, {through: Enrollment})
};

export { User, Signature, Enrollment, Auth };
export default defineAssociations;
