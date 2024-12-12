import LoginForm from '@/components/auth/LoginForm';
import TaskImage from '@/components/ui/TaskImage';
import { GlobalColors } from '@/utils/colors';
import React from 'react'
import { Platform, StyleSheet, View } from 'react-native';

function LoginScreen() {
    return (
        <View style={styles.rootContainer}>
            <TaskImage />
            <LoginForm />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: Platform?.OS === 'web' ? 'center' : 'stretch',
        backgroundColor: GlobalColors?.darkBackground,
    }
});