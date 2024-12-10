import LoginForm from '@/components/auth/LoginForm';
import { GlobalColors } from '@/utils/colors';
import React from 'react'
import { StyleSheet, View } from 'react-native';

function LoginScreen() {
    return (
        <View style={styles.rootContainer}>
            <LoginForm />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: GlobalColors?.darkBackground,
    }
});