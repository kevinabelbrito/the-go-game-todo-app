import { HttpRequest } from "@/client/Http";
import { Task } from "@/interfaces/task";

const http = new HttpRequest();

export async function getTasks() {
    const response = await http.get(`/tasks`);
    return response?.data;
}

export async function addTask(body: Partial<Task>) {
    const response = await http.post(`/tasks`, {...body});
    return response?.data;
}
export async function updateTask(id: string, body: Partial<Task>) {
    const response = await http.put(`/tasks/${id}`, {...body});
    return response?.data;
}

export async function changeStatus(id: string) {
    const response = await http.patch(`/tasks/${id}/status`);
    return response?.data;
}

export async function deleteTask(id: string) {
    await http.delete(`/tasks/${id}`);
}