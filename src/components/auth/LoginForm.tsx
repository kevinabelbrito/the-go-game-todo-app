import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Input from '../ui/Input'
import FlatButton from '../ui/FlatButton'
import { useAuthStore } from '@/store/AuthStore'
import { checkUser } from '@/services/user'

function LoginForm() {
    const { authenticate } = useAuthStore();

    const [email, setEmail] = useState<string>('');

    async function handleLogin() {
        try {
            const { token } = await checkUser(email);
            authenticate(token);
        } catch (error) {
            Alert.alert("Attention please!", "there's an error, please check the email and try again");
            console.log("error login: ", error);
        }
    }


    return (
        <View style={styles.rootContainer}>
            <Input
                label='Email'
                textInputConfig={{
                    placeholder: 'Enter an email',
                    value: email,
                    onChangeText: setEmail?.bind(this)
                }}
            />
            <View style={styles.buttonContainer}>
                <FlatButton
                    onPress={handleLogin}
                >
                    Log In
                </FlatButton>
            </View>
        </View>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});