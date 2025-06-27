import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        token: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        refresh_token: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        role: {
          type: Sequelize.ENUM("admin", "user"),
          defaultValue: "user",
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users", // define o nome da tabela explicitamente
      }
    );
  }

  static associate(models) {
    // Um usuário pode ter vários carrinhos
    this.hasMany(models.Cart, {
      foreignKey: "userId",
      as: "carts",
    });

    // Um usuário pode ter vários endereços
    this.hasMany(models.Address, {
      foreignKey: "userId",
      as: "addresses",
    });
  }
}

export default User;
