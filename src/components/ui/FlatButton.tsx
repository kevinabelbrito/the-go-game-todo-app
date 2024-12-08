import { ButtonProps } from '@/interfaces/button';
import { appFonts } from '@/utils/fonts';
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

function FlatButton({children, onPress, style}: ButtonProps) {
    return (
        <Pressable 
            style={({pressed}) => [styles.buttonContainer, style?.pressableContainer, pressed && styles?.pressed]} 
            onPress={onPress}
        >
            <Text style={[styles.buttonText, style?.text]}>{children}</Text>
        </Pressable>
    )
}

export default FlatButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 8,
    },
    buttonText: {
        fontFamily: appFonts.subtitle,
        fontSize: 16,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.5,
    }
});