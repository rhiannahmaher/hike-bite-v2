import { v2 as cloudinary } from "cloudinary";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloudinary_name,
  api_key: process.env.cloudinary_key,
  api_secret: process.env.cloudinary_secret,
});

export const imageStore = {
  getAllImages: async function () {
    const result = await cloudinary.api.resources();
    return result.resources;
  },

  uploadImage: async function (imagefile) {
    writeFileSync("./public/temp.img", imagefile);
    const response = await cloudinary.uploader.upload("./public/temp.img");
    return response.url;
  },

  deleteImage: async function (img) {
    await cloudinary.uploader.destroy(img);
  }
};