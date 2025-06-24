export const userRegister = (req, res) => {
  res.status(201).send("user created");
};

export const userLogin = (req, res) => {
  res.status(200).send("user logged in");
};

export const userLogout = (req, res) => {
  res.status(200).send("user logged out");
};

export const userDelete = (req, res) => {
  res.status(200).send("user deleted");
};

export const userUpdate = (req, res) => {
  res.status(200).send("user updated");
};

export const userGet = (req, res) => {
  res.status(200).send("user found");
};

export const userGetAll = (req, res) => {
  res.status(200).send("users found");
};
