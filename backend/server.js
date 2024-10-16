import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("All set, You are good to go");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
