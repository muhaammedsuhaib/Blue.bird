import authAxios from "../lib/authAxios";
import { LoginResponse, RegistrResponse } from "../types/auth";
import { User } from "../types/user";

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await authAxios.post(
      "/login",
      { email, password },
      { withCredentials: true }
    );

    return response.data as LoginResponse;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
export const registration = async (username: string, email: string, password: string): Promise<RegistrResponse> => {
  try {
    const response = await authAxios.post(
      "/register",
      { username,email, password }
    );

    return response.data as RegistrResponse;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
