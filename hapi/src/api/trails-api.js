import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const trailsApi = {
    findAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const trails = await db.trailStore.find();
                return h.response(trails).code(200);
            }
            catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
    },
    findByLocation: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            const trails = (await db.trailStore.findBy(request.params.id));
            return h.response(trails).code(200);
        },
    },
    addTrail: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            const location = (await db.locationStore.findOne(request.params.id));
            if (location === null) {
                return Boom.notFound("No location with this id");
            }
            const trailPayload = request.payload;
            const trail = {
                name: trailPayload.name,
                type: trailPayload.type,
                donor: request.auth.credentials._id,
                location: location,
                lat: trailPayload.lat,
                lng: trailPayload.lng,
            };
            const newTrail = (await db.trailStore.add(trail));
            return h.response(newTrail).code(200);
        },
    },
    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            console.log("delete...");
            await db.trailStore.delete();
            return h.response().code(204);
        },
    },
};
