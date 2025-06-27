import { Sequelize } from "sequelize";
import config from "../config/database.js";

import User from "../models/User.model.js";
import Cart from "../models/Cart.model.js";
import Address from "../models/Address.model.js";
import Product from "../models/Product.model.js";
import CartItem from "../models/CartItem.model.js";

const sequelize = new Sequelize(config);

const models = { User, Cart, Address, Product, CartItem };

Object.values(models).forEach((model) => model.init(sequelize));
Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});

export { sequelize };
export default models;
