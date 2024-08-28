import Products from "../models/Products.js";

//add new product to database
const createProducts = async (req, res) => {
  //destucturing the request sent
  const { name, image, category, sex, description, price, stock } = req.body;

  //check if product already exists
  const productExists = await Products.findOne({ name });
  if (productExists) {
    res.status(400);
    throw new Error("Product exists in database");
  }

  //create the product if it doesn't exist
  const product = await Products.create({
    name,
    image,
    price,
    description,
    category,
    sex,
    stock,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      image: product.string,
      price: product.price,
      description: product.description,
      stock: product.stock,
      sex: product.sex,
      category: product.category,
    });
  } else {
    res.status(400);
    throw new Error("Invalid");
  }
};

export { createProducts };
