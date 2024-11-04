export interface UserCreate {
    userId?: string;
    username: string;
    fullname: string;
    password: string;
    email: string;
    birthdate?: Date;
    nationality?: string;
}

export interface UserUpdate {
    userId?: string;
    username?: string;
    fullname?: string;
    password?: string;
    email?: string;
    birthdate?: Date;
    nationality?: string;
}

