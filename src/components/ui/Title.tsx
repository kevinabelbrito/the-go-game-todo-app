import { appFonts } from '@/utils/fonts';
import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native';

function Title({ children, style }: TextProps) {
    return (
        <Text style={[styles.title, style]}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: appFonts?.title,
        fontSize: 24,
    },
});