import "dotenv/config";
import express from "express";
import userRoutes from "./routes/usersRoute.js";
import orderRoute from "./routes/ordersRoute.js";
import productRoute from "./routes/productRoute.js";
import connectDb from "./config/mongoDB.js";
import cors from "cors";

connectDb();

//passing express to our app
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`your server is running at ${PORT}`));
