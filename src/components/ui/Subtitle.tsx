import { appFonts } from '@/utils/fonts';
import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native';

function Subtitle({ children, style }: TextProps) {
    return (
        <Text style={[styles.subtitle, style]}>{children}</Text>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontFamily: appFonts?.subtitle,
        fontSize: 18,
    },
});