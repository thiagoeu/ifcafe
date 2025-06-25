import "dotenv/config";

export default {
  dialect: "postgres",
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: "ifcafe",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
