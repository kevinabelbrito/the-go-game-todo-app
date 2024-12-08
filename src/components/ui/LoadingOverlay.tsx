import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

function LoadingOverlay() {
    return (
        <View style={styles.rootContainer}>
            <ActivityIndicator color="blue" size={72} />
        </View>
    )
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    }
});