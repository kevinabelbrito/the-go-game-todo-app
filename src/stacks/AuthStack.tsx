import LoginScreen from '@/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar style='light' />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={LoginScreen} />
            </Stack.Navigator>
        </>
    )
}

export default AuthStack;