import express from "express";

import { sendMessage } from "../controller/message.controller.js";
import { protectRoute } from "../middleware/protect.middleware.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);

export default router;
