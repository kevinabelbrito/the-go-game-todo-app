import TaskList from '@/components/task/TaskList';
import DefaultText from '@/components/ui/DefaultText';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { getTasks } from '@/services/task';
import { useTaskStore } from '@/store/TaskState';
import alert from '@/utils/alert';
import { GlobalColors } from '@/utils/colors';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

function HomeScreen() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {tasks, setTasks} = useTaskStore();
    
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getTasks();
          setTasks(data);
        } catch (error) {
          alert("Attention please!", "The tasks could not be loaded");
          console.log("Error fetching tasks: ", error);
        }
        setIsLoading(false);
      }
      fetchData();
    }, []);

    if (isLoading) {
      return <LoadingOverlay />;
    }

    return (
        <View style={styles.container}>
            {!tasks?.length ? (
              <View>
                <DefaultText>No tasks available</DefaultText>
              </View>
            ) : (
              <TaskList tasks={tasks} />
            )}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalColors?.darkBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });