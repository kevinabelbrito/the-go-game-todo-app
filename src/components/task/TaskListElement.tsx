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
import { GlobalColors } from '@/utils/colors';
import { GlobalStyles } from '@/utils/styles';
import alert from '@/utils/alert';

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
        alert(
            "Warning!", 
            "Would you like to delete this task?",
            [
              {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => {},
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
            alert("Well done", `The task ${title} has been deleted successfully!`);   
        } catch (error) {
            alert("Attention please!", `The task ${title} could not be deleted, please try again later`);
            console.log("Error deleting task: ", error);
        }
    }

    async function toggleStatus() {
        try {
            const { status } = await changeStatus(id!);
            toggleTaskStatus(id!, status);
        } catch (error) {
            alert("Attention please!", `The task ${title} status could not changed, plase try again later`);
            console.log("Error to toggle task status: ", error);
        }
    }

    const aditionalStatusContainerStyles = {
        backgroundColor: status == 'pending' ? GlobalColors?.warning : GlobalColors?.success,
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
                            pressableContainer: {...styles.buttonStatusContainer, ...aditionalStatusContainerStyles},
                            text: { color: status == 'pending' ? GlobalColors?.darkText : GlobalColors?.lightText },
                        }}
                    >
                        {status}
                    </FlatButton>
                </View>
                <View style={styles.buttonsContainer}>
                    <FlatButton onPress={editHandler}>
                        <Ionicons name="pencil" size={24} color={GlobalColors?.darkBackground} />
                    </FlatButton>
                    <FlatButton onPress={deleteHandler}>
                        <Ionicons name="trash" size={24} color={GlobalColors?.error}/>
                    </FlatButton>
                </View>
            </View>
        </View>
    )
}

export default TaskListElement;

const styles = StyleSheet.create({
    rootContainer: {
        ...GlobalStyles?.card,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 10,
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
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});