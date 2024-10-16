import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router();

router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);

export default router;
