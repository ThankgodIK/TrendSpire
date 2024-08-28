import mongoose from "mongoose";
import orderSchema from "../controllers/orderController";

const orderSchema = new mongoose.Schema({
  userOrders: [],
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  orderDate: {
    type: Date,
    required: true,
  },
});

export default orderSchema;
