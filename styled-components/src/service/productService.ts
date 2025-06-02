import axios from "axios";
import type { Product } from "../models/Product";

export const getProducts = async () => {
  const response = await axios.get<Product[]>(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );

  return response.data;
};
