import bcrypt from "bcryptjs";

import User from "../model/user.model.js";
import generateTokenAndSetCookie from "../utils/generateJWTcookie.js";

export const login = async (req, res) => {
  const { phone, password } = req.body;

  try {
    if (!phone || !password) {
      res.status(400).json({ error: "Fill out all the field" });
    }
    const user = await User.findOne({ phone: Number(phone) });

    const isPasswordCorrect =
      (await bcrypt.compare(password, user?.password)) || "";

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("Error in Login ", error);
    res.status(500).send(error.message);
  }
};

export const logout = async (req, res) => {
  try {
    res
      .cookie("jwt", "", {
        maxAge: 0,
      })
      .status(200)
      .json({ message: "Logout Successfully" });
  } catch (error) {
    console.log("Error in Logout ", error);
    res.status(500).send(error.message);
  }
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
