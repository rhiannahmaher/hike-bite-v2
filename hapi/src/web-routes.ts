import { accountsController } from "./controllers/accounts-controller.js";
import { trailsController } from "./controllers/trails-controller.js";

export const webRoutes = [
  { method: "GET" as const, path: "/", config: accountsController.index },
  { method: "GET" as const, path: "/signup", config: accountsController.showSignup },
  { method: "GET" as const, path: "/login", config: accountsController.showLogin },
  { method: "GET" as const, path: "/logout", config: accountsController.logout },
  { method: "POST" as const, path: "/register", config: accountsController.signup },
  { method: "POST" as const, path: "/authenticate", config: accountsController.login },

  { method: "GET" as const, path: "/trail", config: trailsController.index },
  { method: "POST" as const, path: "/trail", config: trailsController.addTrail },
  { method: "GET" as const, path: "/report", config: trailsController.report },
  
  { method: "POST" as const, path: "/trail/{id}/uploadimage", config: trailsController.uploadImage },
  {
    method: "GET" as const,
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false as const },
  },
];