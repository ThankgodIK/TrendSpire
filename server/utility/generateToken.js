import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (id, name, isAdmin) => {
  return jwt.sign({ id, name, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
