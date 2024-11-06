import { User } from "./user";

export interface LoginResponse {
  message: string;
  data: {
    token: string;
    user: User;
  };
}
export interface RegistrResponse {
  message: string;
  data: {
    user: User;
  };
}
