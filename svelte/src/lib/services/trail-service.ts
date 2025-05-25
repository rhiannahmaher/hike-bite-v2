import axios from "axios";
import type { Session, User } from "$lib/types/trail-types";
import type { Location, Trail } from "$lib/types/trail-types";
import { currentLocations, currentTrails, loggedInUser } from "$lib/runes.svelte";

export const trailService = {
  baseUrl: "http://localhost:4000",

  async signup(user: User): Promise<boolean> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users`, user);
      return response.data.success === true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {
        email,
        password
      });
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session: Session = {
          name: response.data.name,
          token: response.data.token,
          _id: response.data._id
        };
        this.saveSession(session, email);
        await this.refreshTrailInfo();
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  saveSession(session: Session, email: string) {
    loggedInUser.email = email;
    loggedInUser.name = session.name;
    loggedInUser.token = session.token;
    loggedInUser._id = session._id;
    localStorage.trail = JSON.stringify(loggedInUser);
  },

  async restoreSession() {
    const savedLoggedInUser = localStorage.trail;
    if (savedLoggedInUser) {
      const session = JSON.parse(savedLoggedInUser);
      loggedInUser.email = session.email;
      loggedInUser.name = session.name;
      loggedInUser.token = session.token;
      loggedInUser._id = session._id;
    }
    await this.refreshTrailInfo();
  },

  clearSession() {
    currentTrails.trails = [];
    currentLocations.locations = [];
    loggedInUser.email = "";
    loggedInUser.name = "";
    loggedInUser.token = "";
    loggedInUser._id = "";
    localStorage.removeItem("trail");
  },

  async refreshTrailInfo() {
    if (loggedInUser.token) {
      currentTrails.trails = await this.getTrails(loggedInUser.token);
      currentLocations.locations = await this.getLocations(loggedInUser.token);
    }
  },

  disconnect() {
    loggedInUser.email = "";
    loggedInUser.name = "";
    loggedInUser.token = "";
    loggedInUser._id = "";
    localStorage.removeItem("trail");
  },

  async addTrail(trail: Trail, token: string) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await axios.post(
        this.baseUrl + "/api/locations/" + trail.location + "/trails",
        trail
      );
      await this.refreshTrailInfo();
      return response.status == 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async getLocations(token: string): Promise<Location[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await axios.get(this.baseUrl + "/api/locations");
      return response.data;
    } catch (error) {
    console.log(error);
      return [];
    }
  },

  async getTrails(token: string): Promise<Trail[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await axios.get(this.baseUrl + "/api/trails");
      return response.data;
    } catch (error) {
    console.log(error)
      return [];
    }
  },
};