export const login = (req, res) => {
  console.log("Login is triggered");
  res.send("Login successfully");
};

export const logout = (req, res) => {
  console.log("Logout is triggered");
  res.send("Logout successfully");
};

export const signup = (req, res) => {
  console.log("signup is triggered");
  res.send("Signup successfully");
};
