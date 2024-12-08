import { appFonts } from '@/utils/fonts';
import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native';

function DefaultText({ children, style }: TextProps) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

export default DefaultText;

const styles = StyleSheet.create({
    text: {
        fontFamily: appFonts?.text,
        fontSize: 14,
    },
});