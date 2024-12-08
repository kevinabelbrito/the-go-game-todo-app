import { Task } from '@/interfaces/task';
import { Alert, StyleSheet, View } from 'react-native'
import Title from '../ui/Title';
import DefaultText from '../ui/DefaultText';
import FlatButton from '../ui/FlatButton';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@/types/navigation';
import { changeStatus, deleteTask } from '@/services/task';
import { useTaskStore } from '@/store/TaskState';

function TaskListElement({
    id,
    title,
    description,
    status,
}: Partial<Task>) {
    const navigation = useNavigation<NavigationProp>();

    const { deleteTask: deleteCurrentTask, toggleTaskStatus } = useTaskStore();

    function editHandler() {
        console.log("Edit task: ", id);
        navigation.navigate('Task', {
            taskId: id!,
        });
    }

    function deleteHandler() {
        Alert.alert(
            "Warning!", 
            "Would you like to delete this task?",
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Yes, Do it!',
                onPress: () => deleteAction(),
                style: 'default',
              },
            ],
        );
    }

    async function deleteAction() {
        try {
            await deleteTask(id!);
            deleteCurrentTask(id!);
            Alert.alert("Well done", `The task ${title} has been deleted successfully!`);   
        } catch (error) {
            Alert.alert("Attention please!", `The task ${title} could not be deleted, please try again later`);
            console.log("Error deleting task: ", error);
        }
    }

    async function toggleStatus() {
        try {
            const { status } = await changeStatus(id!);
            toggleTaskStatus(id!, status);
        } catch (error) {
            Alert.alert("Attention please!", `The task ${title} status could not changed, plase try again later`);
            console.log("Error to toggle task status: ", error);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Title>{title}</Title>
            </View>
            <View style={styles.descriptionContainer}>
                <DefaultText>{description}</DefaultText>
            </View>
            <View style={styles.FooterContainer}>
                <View>
                    <FlatButton 
                        onPress={toggleStatus}
                        style={{
                            pressableContainer: styles.buttonStatusContainer,
                            text: styles.buttonStatusText,
                        }}
                    >
                        {status}
                    </FlatButton>
                </View>
                <View style={styles.buttonsContainer}>
                    <FlatButton onPress={editHandler}>
                        <Ionicons name="pencil" size={24} color="blue" />
                    </FlatButton>
                    <FlatButton onPress={deleteHandler}>
                        <Ionicons name="trash" size={24} color="red" />
                    </FlatButton>
                </View>
            </View>
        </View>
    )
}

export default TaskListElement;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'blue',
        marginVertical: 10,
        marginHorizontal: 30,
    },
    titleContainer: {
        // paddingVertical: 10,
    },
    descriptionContainer: {
        paddingVertical: 15,
    },
    FooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 5,
        padding: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 5,
    },
    buttonStatusContainer: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonStatusText: {
        color: 'white',
    }
});