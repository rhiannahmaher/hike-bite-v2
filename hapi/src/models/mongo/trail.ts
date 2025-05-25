import { Schema, model } from "mongoose";
import { Trail } from "../../types/trail-types";

const trailSchema = new Schema<Trail>({
  name: String,
  type: String,
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  lat: String,
  lng: String,
});

export const TrailMongoose = model("Trail", trailSchema);