import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const sequelize = new Sequelize("database", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mime_type: {
      type: DataTypes.ENUM("1.JPEG", "2.PNG", "3.PNG"),
      allowNull: false,
    },
    media_metaData: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    freezeTableName: true,
    timestamps: true,
  }
);

export { sequelize, User };
