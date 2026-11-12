import jwt from "jsonwebtoken";
import 'dotenv/config'

export function createToken(userdata) {
  const token = jwt.sign(userdata, process.env.tokenKey);
  return token;
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.tokenKey);
    return "ok";
  } catch (e) {
    throw new Error("error de token");
  }
}
