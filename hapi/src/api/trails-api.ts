import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";
import { Location, Trail } from "../types/trail-types.js";
import { trailStore } from "../models/mongo/trail-store.js";

export const trailsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const trails = await db.trailStore.find();
        return h.response(trails).code(200);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findByType: {
    auth: false,
    handler: async function (request, h) {
      const type = request.params.type;
      const trails = await trailStore.findByType(type);
      return trails;
    }
  },

  findByLocation: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const trails = (await db.trailStore.findBy(request.params.id)) as Trail;
      return h.response(trails).code(200);
    },
  },

  addTrail: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const location = (await db.locationStore.findOne(request.params.id)) as Location;
      if (location === null) {
        return Boom.notFound("No location with this id");
      }
      const trailPayload = request.payload as Trail;
      const trail = {
        name: trailPayload.name,
        type: trailPayload.type,
        donor: request.auth.credentials._id,
        location: location,
        lat: trailPayload.lat,
        lng: trailPayload.lng,
      };
      const newTrail = (await db.trailStore.add(trail)) as Trail;
      return h.response(newTrail).code(200);
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      console.log("delete...");
      await db.trailStore.delete();
      return h.response().code(204);
    },
  },
};