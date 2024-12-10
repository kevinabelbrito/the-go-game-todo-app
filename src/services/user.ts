import { HttpRequest } from "@/client/Http";

const http = new HttpRequest();

export async function checkUser(email: string) {
    const response = await http.get(`/users/${email}`);
    return response?.data;
}

export async function addNewUser(email: string) {
    const response = await http.post(`/users`, {email});
    return response?.data;
}

export async function validateToken(token: string) {
    const response = await http.post(`/users/validate-token`, {token});
    return response?.data;
}