import { Schema, model } from "mongoose";

const locationSchema = new Schema({
    name: String
});
export const LocationMongoose = model("Location", locationSchema);
