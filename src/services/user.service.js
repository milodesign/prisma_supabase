import {
  registerUserModel,
  getUserModel,
  getAllUsersModel,
} from "../models/user.model.js";
import { createToken } from "./token/token.service.js";
import bcrypt from "bcrypt";

const saltRounds = 10;
export function registerUserService(body) {
  let { email, name, username, password } = body;
  password = bcrypt.hash(password, saltRounds);

  return registerUserModel(email, name, username, password);
}

export async function loginService(req) {
  const { email, password } = req.body;
  const user = await getUserModel(email);

  if (user) {
    const userdata = {
      name: user.name,
      email: user.email,
      username: user.username,
    };

    const pass = await bcrypt.compare(password, user.password);
    if (pass) {
      const token = createToken(userdata)
      return {
        status: 200,
        message: token,
      };
    } else {
      return {
        status: 401,
        message: "Usuario o clave incorrecto",
      };
    }
  } else {
    return {
      status: 401,
      message: "Usuario o clave incorrecto",
    };
  }
}

export function getAllUsersService() {
  return getAllUsersModel();
}
