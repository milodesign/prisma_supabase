import { verifyToken } from "../services/token/token.service.js";
export function validateUser(req, res, next) {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    verifyToken(token);
    next();
  } catch (e) {
    console.log("lo que sea")
    res.status(401).send("error de token");
  }
}
