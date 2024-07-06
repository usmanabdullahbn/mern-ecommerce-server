import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  deleteProduct,
  getAdmintProducts,
  getAllCategories,
  getAllProducts,
  getLastestProducts,
  getSigleProduct,
  newProduct,
  updateProduct,
} from "../controllers/product.js";

const app = express.Router();

// To Create New Product - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

// To get all Products with filters - /api/v1/product/all
app.get("/all", getAllProducts);

// To get last 10 Products - /api/v1/product/latest
app.get("/latest", getLastestProducts);

// To Create all unique Categories - /api/v1/product/categories
app.get("/categories", getAllCategories);

// To Create get all Product - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdmintProducts);

// To get Update, Delete Product!
app
  .route("/:id")
  .get(getSigleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
