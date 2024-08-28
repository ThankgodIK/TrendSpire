import orderSchema from "../models/Orders.js";

//store order
const processOder = async (req, res) => {
  //destructure order
  const { userOrder, userId, orderDate } = req.body;

  if (userOrder && userOrder.length === 0) {
    res.status(401);
    throw new Error("Your Cart is empty");
  } else {
    const order = await orderSchema.create({
      userOrder,
      userId,
      orderDate,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
};

export default processOder;
