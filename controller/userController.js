import express from "express";
import { userMiddleware } from "../middleware/userMiddleware.js";

export class userController {}
userController.user = {
  getAllDetails: async (req, res) => {
    try {
      const data = await userMiddleware.user.fetchedAllDetails(req, res);
      res.json({
        status: "200",
        message: data,
      });
    } catch (error) {
      res.json({ status: "500", message: error.message });
    }
  },
  addDetails: async (req, res) => {
    try {
      const data = await userMiddleware.user.createDetails(req, res);
      res.json({
        status: "200",
        message: data,
        // data: data,
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "500", message: error.message });
    }
  },
  getOneDetails: async (req, res) => {
    try {
      const data = await userMiddleware.user.fetchedOneDetail(req, res);
      res.json({
        status: "200",
        message: data,
      });
    } catch (error) {
      res.json({ status: "500", message: error.message });
    }
  },
  deleteOne: async (req, res) => {
    try {
      const data = await userMiddleware.user.deleteOne(req, res);
      res.json({
        status: "200",
        message: data,
      });
    } catch (error) {
      res.json({ status: "500", message: error.message });
    }
  },
};
