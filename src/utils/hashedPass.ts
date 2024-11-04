import bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
    const saltRounds = 10; // rondas de salt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

export { hashPassword };
