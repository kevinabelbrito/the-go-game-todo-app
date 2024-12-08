import { Task } from "@/interfaces/task";
import axios from "axios";
import { API_URL } from '@env';

export async function getTasks() {
    const response = await axios.get(`${API_URL}/tasks`);
    return response?.data;
}

export async function addTask(body: Partial<Task>) {
    const response = await axios.post(`${API_URL}/tasks`, {...body});
    return response?.data;
}
export async function updateTask(id: string, body: Partial<Task>) {
    const response = await axios.put(`${API_URL}/tasks/${id}`, {...body});
    return response?.data;
}

export async function changeStatus(id: string) {
    const response = await axios.patch(`${API_URL}/tasks/${id}/status`);
    return response?.data;
}

export async function deleteTask(id: string) {
    await axios.delete(`${API_URL}/tasks/${id}`);
}