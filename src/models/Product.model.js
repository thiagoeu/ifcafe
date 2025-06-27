import Sequelize, { Model } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        stock: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.CartItem, { foreignKey: "productId", as: "cartItems" });
  }
}

export default Product;
