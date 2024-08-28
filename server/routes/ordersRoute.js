import express from "express";

import authenticatioMiddleware from "../middleware/userAuth.js";
import processOder from "../controllers/orderController.js";

const router = express.Router();

router.get("/create-order", authenticatioMiddleware, processOder);

export default router;
