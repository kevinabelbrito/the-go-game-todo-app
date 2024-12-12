import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Input from '../ui/Input'
import FlatButton from '../ui/FlatButton'
import { useAuthStore } from '@/store/AuthStore'
import { addNewUser, checkUser } from '@/services/user'
import { GlobalStyles } from '@/utils/styles'
import alert from '@/utils/alert'

function LoginForm() {
    const { authenticate } = useAuthStore();

    const [email, setEmail] = useState<string>('');

    async function handleLogin() {
        if (!email?.length) {
            alert("Empty data", "Please, enter a email");
            return;
        }
        try {
            const { token } = await checkUser(email);
            authenticate(token);
        } catch (error) {
            if(error?.message?.includes('404')) {
                alert(
                    "Attention please!", 
                    "Email not found, Would you like to registry this email for future sessions?",
                    [
                      {
                        text: 'No',
                        style: 'cancel',
                        onPress: () => {},
                      },
                      {
                        text: 'Yes',
                        onPress: handleNewRegistry,
                        style: 'default',
                      },
                    ],
                );
                ;
                return;
            }
            alert("Attention please!", "There's an error, please check the email and try again");
            console.log("error login: ", error);
        }
    }

    async function handleNewRegistry() {
        try {
            const { token } = await addNewUser(email);
            authenticate(token);
        } catch (error) {
            alert("Attention please!", "There's an error, please try again again");
            console.log("error to registry new user: ", error);
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
        ...GlobalStyles?.card,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});