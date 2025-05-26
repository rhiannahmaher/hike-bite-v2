import { currentDataSets } from "$lib/runes.svelte";
import type { Location, Trail } from "$lib/types/trail-types";

export function computeByType(trailList: Trail[]) {
  trailList.forEach((trail) => {
    if (trail.type == "Cafe") {
      currentDataSets.trailsByType.datasets[0].values[0] += 1;
    } else if (trail.type == "Restaurant") {
      currentDataSets.trailsByType.datasets[0].values[1] += 1;
    } else if (trail.type == "Pub") {
      currentDataSets.trailsByType.datasets[0].values[2] += 1;
    } else if (trail.type == "Other") {
      currentDataSets.trailsByType.datasets[0].values[3] += 1;
    }
  });
}

export function computeByLocation(trailList: Trail[], locations: Location[]) {
  currentDataSets.trailsByLocation.labels = [];
  currentDataSets.trailsByLocation.datasets[0].values = [];  // RESET values array

  locations.forEach((location) => {
    // @ts-ignore
    currentDataSets.trailsByLocation.labels.push(`${location.name}`);
    currentDataSets.trailsByLocation.datasets[0].values.push(0);
  });

  locations.forEach((location, i) => {
    trailList.forEach((trail) => {
      if (typeof trail.location !== "string") {
        if (trail.location._id == location._id) {
          currentDataSets.trailsByLocation.datasets[0].values[i] += 1;
        }
      }
    });
  });
}