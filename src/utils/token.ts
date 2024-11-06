import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "hakunamatata";

export function createToken(data: string | object) {
  return jwt.sign(data, JWT_SECRET, { expiresIn: "1d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
