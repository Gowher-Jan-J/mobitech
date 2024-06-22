import express from "express";
import cors from "cors";
import exp from "constants";
import { userRouter } from "./routes/userRoutes.js";
import { sequelize, User } from "./models/models.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", userRouter);

(async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
