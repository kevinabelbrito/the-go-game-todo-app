import TaskForm from "@/components/task/TaskForm"
import { Task } from "@/interfaces/task";
import { addTask, updateTask } from "@/services/task";
import { Alert, StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from "@/types/navigation";
import { useTaskStore } from "@/store/TaskState";
import { useLayoutEffect } from "react";
import { GlobalColors } from "@/utils/colors";


function TaskScreen({ route }: any) {
    const navigation = useNavigation<NavigationProp>();

    const { 
        addTask: addNewTask,
        updateTask: updateCurrentTask,
        tasks,
    } = useTaskStore();

    const taskId = route?.params?.taskId;
    const isEdit = !!taskId;

    const selectedTask = tasks?.find(task => task?.id === taskId);

    useLayoutEffect(() => {
        navigation?.setOptions({
            title: isEdit ? `Edit "${selectedTask?.title}"` : 'Add New Task',
        })
    }, []);

    async function submitHandler(data: Partial<Task>) {
        if (!isEdit) {
            await addTaskHandler(data);
            return;
        }
        await updateTaskHandler(data);
    } 

    async function addTaskHandler(data: Partial<Task>) {
        try {
            const newTask = await addTask(data);
            addNewTask(newTask);
            navigation.goBack();   
        } catch (error) {
            Alert.alert("Ups!", "Error adding task, please check the data and try again.");
            console.log("Error adding tasks: ", error);
        }
    }

    async function updateTaskHandler(data: Partial<Task>) {
        try {
            const updatedTask = await updateTask(taskId, data);
            updateCurrentTask({...updatedTask, status: selectedTask?.status, createdAt: selectedTask?.createdAt}, taskId);
            navigation.goBack();  
        } catch (error) {
            Alert.alert("Ups!", "Error editing task, please check the data and try again.");
            console.log("Error editing tasks: ", error);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <TaskForm onSubmit={submitHandler} isEdit={isEdit} selectedTask={selectedTask} />
        </View>
    )
}

export default TaskScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalColors?.darkBackground,
    }
});