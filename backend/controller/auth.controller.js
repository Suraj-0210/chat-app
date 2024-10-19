import bcrypt from "bcryptjs";

import User from "../model/user.model.js";
import generateTokenAndSetCookie from "../utils/generateJWTcookie.js";

export const login = async (req, res) => {
  console.log("Login is triggered");
  res.send("Login successfully");
};

export const logout = async (req, res) => {
  console.log("Logout is triggered");
  res.send("Logout successfully");
};

export const signup = async (req, res) => {
  const { fullname, gender, username, phone, password, profilepic } = req.body;

  try {
    if (!fullname || !gender || !username || !password || !phone) {
      res.status(400).send("Please fill out all fields");
    }

    const user = await User.findOne({ username });
    if (user) {
      res.status(400).send("User exists with this Username");
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      gender,
      username,
      phone: Number(phone),
      password: hashedPassword,
      profilepic:
        profilepic ||
        `https://avatar.iran.liara.run/public/${
          gender === "male" ? "boy" : "girl"
        }?username=${username}`,
    });

    await newUser.save();

    // Generate the JWT token and send in cookie.
    generateTokenAndSetCookie(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilepic: newUser.profilepic,
    });
  } catch (error) {
    console.log("Error in SignUp ", error);
    res.status(500).send(error.message);
  }
};
