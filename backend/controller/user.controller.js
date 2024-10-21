import User from "../model/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filterdUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filterdUsers);
  } catch (error) {
    console.log("Error in getAllUsers " + error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
