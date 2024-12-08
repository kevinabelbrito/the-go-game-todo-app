import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackParamList = {
    Home: undefined;
    Task: undefined;
};

export type NavigationProp = NativeStackNavigationProp<StackParamList>;