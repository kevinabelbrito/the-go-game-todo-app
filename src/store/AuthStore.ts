import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type AuthStore = {
    token: string;
    isAuth: boolean;
    authenticate: (token: string) => void;
    logOut: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    token: "",
    isAuth: false,
    authenticate: (token) => {
        AsyncStorage?.setItem("token", token);
        set(() => ({
            token,
            isAuth: true,
        }))
    },
    logOut: () => {
        AsyncStorage?.removeItem("token");
        set(() => ({
            token: '',
            isAuth: false,
        }))
    }
}))