import { InputProps } from "@/interfaces/input";
import { appFonts } from "@/utils/fonts";
import { StyleSheet, Text, TextInput, View } from "react-native"


function Input({label, style, textInputConfig}: InputProps) {
    let inputStyles: any = [styles?.input];

    if (textInputConfig && textInputConfig?.multiline) {
        inputStyles?.push(styles?.inputMultiline);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...textInputConfig} />
        </View>
    )
}

export default Input;

const styles = StyleSheet?.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontFamily: appFonts.subtitle,
        fontSize: 12,
        marginBottom: 4,
    },
    input: {
        fontFamily: appFonts.text,
        padding: 6,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'blue',
        fontSize: 14,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
});