import { User } from "../models";
import { UserCreate, UserUpdate } from "../interfaces/users";
import { ValidationError } from 'sequelize';
import { userSchema } from "../validators/userValidator";
import { createHash } from "../utils/create-hash"
import { z } from "zod";

class UserService {

    static async getAllUsers() {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] },
            });
            return users;
        } catch (error) {
            throw new Error("ERROR_FETCHING_ALL_USERS");
        }
    }

    static async getUserById(id: string) {
        try {
            const user = await User.findOne({
                where: { userId: id }
            });
            if (!user) {
                throw new Error("USER_NOT_FOUND");
            }
            return user;
        } catch (error) {
            throw new Error(`ERROR_FETCHING_USER | ${error.message}`);
        }
    }

    static async createUser(newUser: UserCreate) {
        try {
            const validatedUser = userSchema.parse(newUser);

            const existingUser = await User.findOne({ where: { email: validatedUser.email } });
            if (existingUser) {
                throw new Error("EMAIL_ALREADY_EXISTS");
            }

            validatedUser.password = await createHash(validatedUser.password);

            const createdUser = await User.create(validatedUser);

            const { password, ...userWithoutPassword } = createdUser.toJSON();
            return userWithoutPassword;
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new Error(error.errors.map(e => e.message).join(", "));
            } else if (error instanceof ValidationError) {
                throw new Error(error.errors[0].message);
            }
            throw error;
        }
    }


    static async updateUser(id: string, updateData: UserUpdate) {
        try {
            if (!updateData || Object.keys(updateData).length === 0) {
                throw new Error("NO_DATA_TO_UPDATE");
            }

            const user = await User.findOne({ where: { userId: id } });
            if (!user) {
                throw new Error("USER_NOT_FOUND");
            }


            if (updateData.email) {
                const existingUser = await User.findOne({
                    where: {
                        email: updateData.email,
                        userId: id,
                    },
                });

                if (existingUser) {
                    throw new Error("EMAIL_ALREADY_EXISTS");
                }
            }

            await user.update(updateData);
            return user;

        } catch (error) {
            if (error instanceof ValidationError) {
                throw new Error(error.errors[0].message);
            }
            throw error;
        }
    }

    static async deleteUser(id: string) {
        try {
            const user = await User.findOne({ where: { userId: id } });
            if (!user) {
                throw new Error("USER_NOT_FOUND");
            }

            const deletedUserData = {
                userId: (user as any).userId,
                username: (user as any).username
            };

            await user.destroy();
            return { message: "USER_DELETED_SUCCESSFULLY", user: deletedUserData };
        } catch (error) {
            throw error;
        }
    }
}



export default UserService;
