import Boom from "@hapi/boom";
import { db } from "../models/db.js";
export const locationsApi = {
    find: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            const locations = await db.locationStore.find();
            return h.response(locations).code(200);
        },
    },
    findOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const location = await db.locationStore.findOne(request.params.id);
                if (location === null) {
                    return Boom.notFound("No location with this id");
                }
                return h.response(location).code(200);
            }
            catch (err) {
                return Boom.notFound("No location with this id");
            }
        },
    },
    create: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            const location = await db.locationStore.add(request.payload);
            if (location !== null) {
                return h.response(location).code(201);
            }
            return Boom.badImplementation("error creating location");
        },
    },
    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            await db.locationStore.delete();
            return h.response().code(204);
        },
    },
    deleteOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            await db.locationStore.deleteOne(request.params.id);
            return h.response().code(204);
        },
    },
};
