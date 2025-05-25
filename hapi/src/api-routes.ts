import { locationsApi } from "./api/locations-api.js";
import { trailsApi } from "./api/trails-api.js";
import { userApi } from "./api/users-api.js";

export const apiRoutes = [
  { method: "GET" as const, path: "/api/users", config: userApi.find },
  { method: "POST" as const, path: "/api/users", config: userApi.create },
  { method: "DELETE" as const, path: "/api/users", config: userApi.deleteAll },
  { method: "GET" as const, path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST" as const, path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET" as const, path: "/api/locations", config: locationsApi.find },
  { method: "GET" as const, path: "/api/locations/{id}", config: locationsApi.findOne },
  { method: "POST" as const, path: "/api/locations", config: locationsApi.create },
  { method: "DELETE" as const, path: "/api/locations/{id}", config: locationsApi.deleteOne },
  { method: "DELETE" as const, path: "/api/locations", config: locationsApi.deleteAll },

  { method: "GET" as const, path: "/api/trails", config: trailsApi.findAll },
  { method: "GET" as const, path: "/api/locations/{id}/trails", config: trailsApi.findByLocation },
  { method: "POST" as const, path: "/api/locations/{id}/trails", config: trailsApi.addTrail },
  { method: "DELETE" as const, path: "/api/trails", config: trailsApi.deleteAll },
];