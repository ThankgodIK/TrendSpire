import express from "express";
import {
  registerUser,
  userLogin,
  dashBoard,
} from "../controllers/userController.js";
import authenticatioMiddleware from "../middleware/userAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/dashboard", authenticatioMiddleware, dashBoard);

export default router;
