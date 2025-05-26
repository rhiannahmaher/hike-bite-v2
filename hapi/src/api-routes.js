import { locationsApi } from "./api/locations-api.js";
import { trailsApi } from "./api/trails-api.js";
import { userApi } from "./api/users-api.js";
export const apiRoutes = [
    { method: "GET", path: "/api/users", config: userApi.find },
    { method: "POST", path: "/api/users", config: userApi.create },
    { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
    { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
    { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
    { method: "GET", path: "/api/locations", config: locationsApi.find },
    { method: "GET", path: "/api/locations/{id}", config: locationsApi.findOne },
    { method: "POST", path: "/api/locations", config: locationsApi.create },
    { method: "DELETE", path: "/api/locations/{id}", config: locationsApi.deleteOne },
    { method: "DELETE", path: "/api/locations", config: locationsApi.deleteAll },
    { method: "GET", path: "/api/trails", config: trailsApi.findAll },
    { method: "GET", path: "/api/locations/{id}/trails", config: trailsApi.findByLocation },
    { method: "POST", path: "/api/locations/{id}/trails", config: trailsApi.addTrail },
    { method: "DELETE", path: "/api/trails", config: trailsApi.deleteAll }
];
