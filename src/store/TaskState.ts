import { Task } from "@/interfaces/task";
import { create } from "zustand";

type TaskStore = {
    tasks: Task[];
    setTasks: (data: Task[]) => void;
    addTask: (data: Task) => void;
    updateTask: (data: Task, id: string) => void;
    toggleTaskStatus: (id: string, status: string) => void;
    deleteTask: (id: string) => void;
}

export const useTaskStore= create<TaskStore>((set) => ({
    tasks: [],
    setTasks: (data) => {
        set((state) => ({
            tasks: data,
        }))
    },
    addTask: (data) => {
        set((state) => ({
            tasks: [data, ...state?.tasks],
        }))
    },
    updateTask: (data, id) => {
        set((state) => ({
            tasks: [...state?.tasks?.map(item => {
                if (item?.id === id) {
                    return data;
                }
                return item;
            })],
        }))
    },
    toggleTaskStatus: (id, status) => {
        set((state) => ({
            tasks: [...state?.tasks?.map(item => {
                if (item?.id === id) {
                    return {
                        ...item,
                        status: status,
                    }
                }
                return item;
            })]
        }))
    },
    deleteTask: (id) => {
        set((state) => ({
            tasks: state?.tasks?.filter(item => item.id !== id),
        }));
    }
}));