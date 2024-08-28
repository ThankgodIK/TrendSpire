import express from "express";

import authenticatioMiddleware from "../middleware/userAuth.js";

const router = express.Router();

router.get("/create-order", authenticatioMiddleware, dashBoard);

export default router;
