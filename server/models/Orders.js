import mongoose from "mongoose";

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
