import User from "./users";
import Signature from "./signatures";
import Enrollment from "./enrollments";
import Auth from "./auth";

const defineAssociations = () => {

     //  uno a uno entre User y Auth
     User.hasOne(Auth, { foreignKey: "userId", as: "auth" });
     Auth.belongsTo(User, { foreignKey: "userId", as: "user" });
 
     //  muchos a muchos entre User y Signature a través de Enrollment
     User.belongsToMany(Signature, { through: Enrollment, foreignKey: "userId", otherKey: "signatureId", as: "signatures" });
     Signature.belongsToMany(User, { through: Enrollment, foreignKey: "signatureId", otherKey: "userId", as: "users" });
     
    // User.hasOne(Auth, { foreignKey: "userId", as: "auth" });
    // Auth.belongsTo(User, { foreignKey: "userId", as: "user" });

    // User.belongsToMany(Signature, {through: Enrollment})
    // Signature.belongsToMany(User, {through: Enrollment}) ///userid_user_user_id ?????

    // User.belongsToMany(Signature, { through: Enrollment, foreignKey: "userId", otherKey: "signatureId", as: "signatures" });
    // Signature.belongsToMany(User, { through: Enrollment, foreignKey: "signatureId", otherKey: "userId", as: "users" });
    
};

export { User, Signature, Enrollment, Auth };
export default defineAssociations;
