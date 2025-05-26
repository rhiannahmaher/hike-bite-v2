export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
};

export type Location = {
  name: string
  _id: string;
};

export interface Trail {
  name: string;
  img: string;
  type: string;
  location: Location | string;
  donor: User | string;
  lat: number;
  lng: number;
}

export type Db = {
  userStore: any;
  locationStore: any;
  trailStore: any;
};