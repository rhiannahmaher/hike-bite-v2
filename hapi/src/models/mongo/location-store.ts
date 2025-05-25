import { LocationMongoose } from "./location.js";

export const locationStore = {
  async find() {
    const locations = await LocationMongoose.find().lean();
    return locations;
  },

  async findOne(id: string) {
    const location = await LocationMongoose.findOne({ _id: id }).lean();
    return location;
  },

  async findBy(name: string) {
    const location = await LocationMongoose.findOne({
      name,
    });
    return location;
  },
};