import { Platform, StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        maxWidth: 480,
        minWidth: Platform?.OS === 'web' ? 400 : 'auto',
    }
});