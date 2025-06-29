import jwt from "jsonwebtoken";
import "dotenv/config";

const generatedAccessToken = async (userId) => {
  const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

export default generatedAccessToken;
