import {
  registerUserService,
  loginService,
  getAllUsersService
} from "../services/user.service.js";

export function getUserController(req, res) {
  res.status(200).send("texto");
}

export async function setUserController(req, res) {
  res.status(201).send(await registerUserService(req.body));
}

export async function loginController(req, res) {
    const user = await loginService(req)
    res.status(user.status).send(user.message)
}

export async function getAllUsersController(req, res) {
  res.status(200).send(await getAllUsersService())
}