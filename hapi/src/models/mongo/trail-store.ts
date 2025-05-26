import { Trail } from "../../types/trail-types.js";
import { TrailMongoose } from "./trail.js";

export const trailStore = {
  async find(): Promise<Trail[]> {
    const trails = await TrailMongoose.find().populate("donor").populate("location").lean();
    trails.forEach((trail) => {
      // @ts-ignore
      trail.donor = `${trail.donor.firstName}, ${trail.donor.lastName}`;
    });
    return trails;
  },

  async findBy(id: string): Promise<Trail | null> {
    const trail = await TrailMongoose.findOne({ location: id });
    if (!trail) {
      return null;
    }
    return trail;
  },

  async updateTrail(updatedTrail) {
    const trail = await TrailMongoose.findOne({ _id: updatedTrail._id });
    trail.name = updatedTrail.name;
    trail.img = updatedTrail.img;
    await trail.save();
  },

  async findByType(type: string): Promise<Trail[]> {
    const trails = await TrailMongoose.find({ type })
    if (!trails) {
      return null;
    }
    return trails;
  },

  async add(trail: Trail): Promise<Trail | null> {
    let newTrail = new TrailMongoose({ ...trail });
    await newTrail.save();
    return newTrail;
  },

  async delete() {
    await TrailMongoose.deleteMany({});
  },
};