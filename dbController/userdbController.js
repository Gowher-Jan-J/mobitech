import express from "express";
// import sequelize from "sequelize";
import * as models from "../models/models.js";
import { User } from "../models/models.js";

export class UserdbController {}
UserdbController.user = {
  fetchedAllDetails: async (data) => {
    try {
      return await models.User.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  createDetails: async (data) => {
    try {
      return await models.User.create({
        user_id: data.user_id,
        name: data.name,
        description: data.description,
        mime_type: data.mime_type,
        media_metaData: data.media_metaData,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  fetchedOneDetail: async (data) => {
    try {
      return await models.User.findOne({
        where: {
          id: data.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  deleteOne: async (data) => {
    try {
      return await models.User.destroy({
        where: {
          id: data.id,
        },
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
