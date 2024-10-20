import express from "express";

import { sendMessage, getMessages } from "../controller/message.controller.js";
import { protectRoute } from "../middleware/protect.middleware.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;
