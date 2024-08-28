import express from "express";
import { createProducts } from "../controllers/productControler.js";

const router = express.Router();

router.post("/createProduct", createProducts);

export default router;
