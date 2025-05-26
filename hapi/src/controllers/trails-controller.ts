import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";
import { imageStore } from "../models/mongo/image-store.js";

export const trailsController = {
  index: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const locations = await db.locationStore.find();
      return h.view("trail", {
        title: "Add a Trail",
        user: loggedInUser,
        locations: locations,
      });
    },
  },

  addTrail: {
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const loggedInUser = request.auth.credentials;
        const trailPayload = request.payload as any;
        const trail = {
          name: trailPayload.name,
          type: trailPayload.type,
          location: trailPayload.location,
          donor: loggedInUser._id,
          lat: trailPayload.lat,
          lng: trailPayload.lng,
        };
        await db.trailStore.add(trail);

        return h.redirect("/trail");
      } catch (err: any) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },

  report: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const trails = await db.trailStore.find();
      return h.view("report", {
        title: "Report",
        user: loggedInUser,
        trails: trails,
      });
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      try {
        const trail = await db.trailStore.getTrailById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          trail.img = url;
          await db.trailStore.updateTrail(trail);
        }
        return h.redirect(`/trail/${trail._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/trail/${trail._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },
};