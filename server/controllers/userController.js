import User from "../models/User.js";
import generateToken from "../utility/generateToken.js";
import bcrypt from "bcryptjs";

//register user
const registerUser = async (req, res) => {
  // destructuring user object from the database
  const { name, userName, phone, email, password } = req.body;

  //from the req.body we can check if the email submitted already exits in our data base
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(
      "A user with email address already exists, try choosing a different email"
    );
  }

  //actual syntax for creating new user
  const user = await User.create({
    name,
    userName,
    email,
    password,
    phone,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      userName: user.userName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("invalid");
  }
};

// authenticate user for login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //   get all user by email, this data is what will be used to auth the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Sorry account not found" });
    }

    console.log(user);

    // compare user password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({ message: "Password or email incorrect" });
    }
    const token = generateToken(user._id, user.name, user.isAdmin);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } catch (error) {
    res.status(401);
    throw new Error(`Server error: ${error}`);
  }
};

const dashBoard = async (req, res) => {
  res.json({
    message: "this is your dashboard",
  });
};

export { registerUser, userLogin, dashBoard };
