import { Model } from "sequelize";

export interface UserCreate {
    userId?: string;
    username: string;
    fullname: string;
    password: string;
    email: string;
    birthdate?: Date;
    nationality?: string;
    role?: string;
}

export interface UserUpdate {
    userId?: string;
    username?: string;
    fullname?: string;
    password?: string;
    email?: string;
    birthdate?: Date;
    nationality?: string;
    role?: string;
}

export interface UserAttributes {
    userId: string;
    username: string;
    fullname: string;
    password: string;
    email: string;
    birthdate?: Date;
    nationality?: string;
    role: string;
}

export type UserModel = Model<UserAttributes> & UserAttributes;
