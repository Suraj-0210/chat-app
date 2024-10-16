export const login = async (req, res) => {
  console.log("Login is triggered");
  res.send("Login successfully");
};

export const logout = async (req, res) => {
  console.log("Logout is triggered");
  res.send("Logout successfully");
};

export const signup = async (req, res) => {
  const { fullname, username, phone, password } = req.body;
  console.log(fullname, username, phone, password);
  res.send("Signup successfully");
};
