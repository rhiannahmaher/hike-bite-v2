export interface Session {
  name: string;
  _id: string;
  token: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface Location {
  name: string;
  _id: string;
}

export interface Trail {
  name: string;
  type: string;
  location: Location | string;
  donor: User | string;
  lat: number;
  lng: number;
}