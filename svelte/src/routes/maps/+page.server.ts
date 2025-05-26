import { trailService } from "$lib/services/trail-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  const { session } = await parent();
  if (session) {
    return {
      trails: await trailService.getTrails(session.token),
      locations: await trailService.getLocations(session.token)
    };
  }
};