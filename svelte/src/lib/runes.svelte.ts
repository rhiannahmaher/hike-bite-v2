import type { Location, Trail } from "./types/trail-types";

export const subTitle = $state({ text: "" });
export const loggedInUser = $state({ 
    email: "",
    name: "",
    token: "",
    _id: ""
 });
export const currentTrails = $state({ trails: [] as Trail[] });
export const currentLocations = $state({ locations: [] as Location[] });