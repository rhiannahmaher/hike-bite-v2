import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

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
};