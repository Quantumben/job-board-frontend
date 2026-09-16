import api from "./axios";
import type { User } from "../types/user";

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const getCsrfCookie = async (): Promise<void> => {
    await api.get("/sanctum/csrf-cookie");
};

export const login = async (
    data: LoginData
): Promise<User> => {
    await getCsrfCookie();

    await api.post("/api/login", data);

    const response = await api.get<{ user: User }>("/api/user");

    return response.data.user;
};

export const register = async (
    data: RegisterData
): Promise<User> => {
    await getCsrfCookie();

    await api.post("/api/register", data);

    const response = await api.get<{ user: User }>("/api/user");

    return response.data.user;
};

export const logout = async (): Promise<void> => {
    await api.post("/api/logout");
};

export const getCurrentUser = async (): Promise<User> => {
    const response = await api.get<{ user: User }>("/api/user");

    return response.data.user;
};