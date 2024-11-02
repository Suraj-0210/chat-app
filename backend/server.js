import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongo from "./db/connectToMongo.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// Enable CORS for all requests or specify your frontend origin
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // To allow cookies if needed
  })
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("All set, You are good to go");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});
