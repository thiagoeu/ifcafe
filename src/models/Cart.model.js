import Sequelize, { Model } from "sequelize";

class Cart extends Model {
  static init(sequelize) {
    super.init(
      {
        status: {
          type: Sequelize.ENUM("active", "abandoned", "ordered"),
          defaultValue: "active",
        },
        total: {
          type: Sequelize.FLOAT,
          defaultValue: 0,
        },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    this.hasMany(models.CartItem, { foreignKey: "cartId", as: "items" });
  }
}

export default Cart;
