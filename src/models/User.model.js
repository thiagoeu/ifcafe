import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
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
      }
    );
  }
}

export default User;
