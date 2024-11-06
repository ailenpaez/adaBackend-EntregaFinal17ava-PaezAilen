import * as bcrypt from 'bcrypt';

export async function createHash(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function comparePassword(storedHash: string, inputPassword: string): Promise<boolean> {
  return bcrypt.compare(inputPassword, storedHash);
}
