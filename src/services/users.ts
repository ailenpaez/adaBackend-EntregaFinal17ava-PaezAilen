import { User } from "../models";

class UserService {

    static async getAllUsers(){

        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw new Error("errorcito")
        }
    }

    static async getUserById(id: string) {
        try {
            const user = await User.findOne({
                where: { signatureId: id },
            });
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw new Error(`Error fetching user: ${error.message}`);
        }
    }

    static async createUser(signatureData: { }) {}

}

export default UserService