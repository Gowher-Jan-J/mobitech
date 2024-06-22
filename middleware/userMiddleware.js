import { UserdbController } from "../dbController/userdbController.js";

export class userMiddleware {}
userMiddleware.user = {
  fetchedAllDetails: async ({ body }) => {
    const fetchedUsers = await UserdbController.user.fetchedAllDetails();
    if (
      fetchedUsers != null &&
      fetchedUsers != undefined &&
      fetchedUsers.length != 0
    ) {
      return fetchedUsers;
    } else {
      throw new Error("No users found");
    }
  },
  createDetails: async ({ body }) => {
    const created = await UserdbController.user.createDetails(body);
    // console.log("🚀 ~ createDetails: ~ created:", created);
    if (created != null && created != undefined && created.length != 0) {
      return "user added successfully";
    } else {
      throw new Error("No users found");
    }
  },
  fetchedOneDetail: async ({ body }) => {
    const fetchedUsers = await UserdbController.user.fetchedOneDetail(body);
    if (
      fetchedUsers != null &&
      fetchedUsers != undefined &&
      fetchedUsers.length != 0
    ) {
      return fetchedUsers;
    } else {
      throw new Error("No users found");
    }
  },
  deleteOne: async ({ body }) => {
    const fetchedUsers = await UserdbController.user.fetchedOneDetail(body);
    if (
      fetchedUsers != null &&
      fetchedUsers != undefined &&
      fetchedUsers.length != 0
    ) {
      const deleted = await UserdbController.user.deleteOne(body);
      if (deleted == null && deleted.length == 0) {
      }

      return "user deleted successfully";
    } else {
      throw new Error("No users found");
    }
  },
};
