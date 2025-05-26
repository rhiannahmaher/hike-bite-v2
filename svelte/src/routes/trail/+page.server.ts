import { trailService } from "$lib/services/trail-service";
import type { Session } from "$lib/types/trail-types";
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

export const actions = {
  trail: async ({ request, cookies }) => {
    const cookieStr = cookies.get("trail-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const trail = {
          name: form.get("name") as unknown as string,
          type: form.get("type") as string,
          location: form.get("location") as string,
          lat: form.get("lat") as unknown as number,
          lng: form.get("lng") as unknown as number,
          donor: session._id
        };
        const newTrail = await trailService.addTrail(trail, session.token);
        return newTrail;
      }
    }
  }
};