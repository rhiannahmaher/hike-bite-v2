import { dev } from "$app/environment";
import { trailService } from "$lib/services/trail-service";
import { redirect } from "@sveltejs/kit";

export const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attempting to log in email: ${email} with password: ${password}`);
      const session = await trailService.login(email, password);

      if (session) {
        const userJson = JSON.stringify(session);
        cookies.set("trail-user", userJson, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7 // one week
        });
        throw redirect(303, "/trail");
      } else {
        throw redirect(307, "/");
      }
    }
  }
};