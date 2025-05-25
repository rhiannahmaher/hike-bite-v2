import { TrailMongoose } from "./trail.js";

export const trailStore = {
    async find() {
        const trails = await TrailMongoose.find().populate("donor").populate("location").lean();
        trails.forEach((trail) => {
            // @ts-ignore
            trail.donor = `${trail.donor.firstName} ${trail.donor.lastName}`;
        });
        return trails;
    },
    async findBy(id) {
        const trail = await TrailMongoose.findOne({ location: id });
        if (!trail) {
            return null;
        }
        return trail;
    },
    async add(trail) {
        let newTrail = new TrailMongoose({ ...trail });
        await newTrail.save();
        return newTrail;
    },
    async delete() {
        await TrailMongoose.deleteMany({});
    },
};
