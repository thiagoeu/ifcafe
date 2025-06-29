import models from "../models/index.js";
import jwt from "jsonwebtoken";

const generatedRefreshToken = async (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET_REFRESH, {
    expiresIn: "7d",
  });

  await models.User.update({ refresh_token: token }, { where: { id: userId } });

  return token;
};

export default generatedRefreshToken;
