import Sequelize, { Model } from "sequelize";

class CartItem extends Model {
  static init(sequelize) {
    super.init(
      {
        quantity: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
          allowNull: false,
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cart, { foreignKey: "cartId", as: "cart" });
  }
}

export default CartItem;
