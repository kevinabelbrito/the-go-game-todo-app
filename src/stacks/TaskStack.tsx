import TaskRightHeader from "@/components/task/TaskRightHeader";
import HomeScreen from "@/screens/HomeScreen";
import TaskScreen from "@/screens/TaskScreen";
import { appFonts } from "@/utils/fonts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TaskStack() {
    const Stack = createNativeStackNavigator();

    return (
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
    )
}

export default TaskStack;