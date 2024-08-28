import "dotenv/config";
import express from "express";
import userRoutes from "./routes/usersRoute.js";
import productRoute from "./routes/productRoute.js";
import connectDb from "./config/mongoDB.js";

connectDb();

//passing express to our app
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoute);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`your server is running at ${PORT}`));
