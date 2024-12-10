import { fontsList } from '@/utils/fonts';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@/stacks/AuthStack';
import { useAuthStore } from '@/store/AuthStore';
import TaskStack from '@/stacks/TaskStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const { isAuth, authenticate } = useAuthStore();

  const [fontsLoaded] = useFonts(fontsList);

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    fetchToken();
  }, [])

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);
 
  if (!appIsReady) {
    return null;
  }

  async function fetchToken() {
    const storedToken = await AsyncStorage?.getItem("token");
    if (storedToken?.length) {
        authenticate(storedToken);
    }
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        {!isAuth ? (
          <AuthStack />
        ) : (
          <TaskStack />
        )}
      </NavigationContainer>
    </>
  );
}
