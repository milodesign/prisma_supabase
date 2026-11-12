import express from "express";
import {
  getUserController,
  setUserController,
  loginController,
  getAllUsersController
} from "../controllers/user.controller.js";
import { validateUser } from "../middlewares/guard.middleware.js"

const router = express.Router();

router.get("/getuser", getUserController);
router.post("/register", setUserController);
router.post("/login", loginController);
router.post("/getallusers", validateUser, getAllUsersController)

export default router;
