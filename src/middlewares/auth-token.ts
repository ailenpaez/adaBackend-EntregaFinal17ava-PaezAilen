import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "hakunamatata";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "TOKEN_NOT_PROVIDED" });
  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    res.status(403).json({ message: "INVALID_TOKEN🔥" });
  }

};