import { currentDataSets, loggedInUser } from "$lib/runes.svelte";
import type { Location, Trail } from "$lib/types/trail-types";
import { trailService } from "./trail-service";
import LeafletMap from "$lib/ui/LeafletMap.svelte";

export function computeByType(trailList: Trail[]) {
  currentDataSets.trailsByType.datasets[0].values = [0, 0, 0, 0];
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
  currentDataSets.trailsByLocation.datasets[0].values = []; 

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

export async function refreshTrailMap (map: LeafletMap) {
  if (!loggedInUser.token) trailService.restoreSession();
  const trails = await trailService.getTrails(loggedInUser.token);
  trails.forEach((trail: Trail) => {
    if (typeof trail.location !== "string") {
      const popup = `${trail.location.name} (${trail.type})`;
      map.addMarker(trail.lat, trail.lng, popup);
    }
  });
  const lastTrail = trails[trails.length - 1];
  if (lastTrail) map.moveTo(lastTrail.lat, lastTrail.lng);
}