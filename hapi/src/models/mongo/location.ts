import { Schema, model } from "mongoose";
import { Location } from "../../types/trail-types";

const locationSchema = new Schema<Location>({
  name: String,
});

export const LocationMongoose = model("Location", locationSchema);