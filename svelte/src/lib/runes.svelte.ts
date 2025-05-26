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
export const currentDataSets = $state({
  trailsByType: {
    labels: ["Cafe", "Restaurant", "Pub", "Other"],
    datasets: [
      {
        values: [0, 0, 0, 0]
      }
    ]
  },
  trailsByLocation: {
    labels: [],
    datasets: [
      {
        values: Array(32).fill(0)
      }
    ]
  }
})