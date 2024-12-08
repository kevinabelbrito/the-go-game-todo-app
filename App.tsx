import { appFonts, fontsList } from '@/utils/fonts';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import TaskScreen from '@/screens/TaskScreen';
import TaskRightHeader from '@/components/task/TaskRightHeader';

export default function App() {
  const [fontsLoaded] = useFonts(fontsList);
  const [appIsReady, setAppIsReady] = useState(false);
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

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleStyle: {
            fontFamily: appFonts?.title,
          },
        }}>
          <Stack.Group>
            <Stack.Screen 
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: 'The Go Game Todo App',
                headerRight: () => <TaskRightHeader />
              }}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name='Task' component={TaskScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
