export const load = async ({ cookies }) => {
  cookies.delete("trail-user", { path: "/" });
};