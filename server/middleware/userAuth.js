import jwt from "jsonwebtoken";

const authenticatioMiddleware = (req, res, next) => {
  const authenticated = req.headers.authorization;

  console.log(authenticated);

  //check if the the authorization is available, if not throw the error
  if (!authenticated || !authenticated.startsWith("Bearer")) {
    return res.status(400).json({ message: "token not provided" });
  }
  //the authenticated carries two array properties, the split method[1] gets you the one with index of 1 which is the token
  const token = authenticated.split(" ")[1];


  try {
    //this tries to
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    //destructuring the property of decoded
    const { _id, name, email } = decoded;
    req.user = { _id, name, email };

    next();
  } catch (error) {
    console.log(error);

    throw new Error(
      `1not authorized to access this page, please login ${error}`
    );
  }
};

export default authenticatioMiddleware;
