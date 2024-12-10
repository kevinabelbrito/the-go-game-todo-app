import { StyleSheet, View } from "react-native";
import Input from "../ui/Input";
import FlatButton from "../ui/FlatButton";
import { useState } from "react";
import { Task } from "@/interfaces/task";

interface TaskFormProps {
    onSubmit: (data: Partial<Task>) => void;
    isEdit?: boolean;
    selectedTask?: Partial<Task>;
}

function TaskForm({ onSubmit, isEdit, selectedTask }: TaskFormProps) {
    const [inputData, setInputData] = useState<Partial<Task>>({
        title: isEdit ? selectedTask?.title : "",
        description: isEdit ? selectedTask?.description : "",
    });

    function handleInputChange(inputIdentifier: string, enteredValue: string) {
        setInputData((currentValues) => {
            return {
                ...currentValues,
                [inputIdentifier]: enteredValue,
            }
        });
    }

    function handleSubmit() {
        onSubmit(inputData);
    }
    
    return (
        <View style={styles.rootContainer}>
            <Input 
                label="Title"
                textInputConfig={{
                    value: inputData.title,
                    onChangeText: handleInputChange.bind(this, 'title'),
                }}
            />
            <Input 
                label="Description" 
                textInputConfig={{
                    multiline: true,
                    autoCapitalize: 'sentenses',
                    value: inputData.description,
                    onChangeText: handleInputChange.bind(this, 'description'),
                }} />
            <View style={styles.buttonContainer}>
                <FlatButton onPress={handleSubmit}>
                    {!isEdit ? "Create new task" : "Save changes"}
                </FlatButton>
            </View>
        </View>
    )
}

export default TaskForm;

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 20,
        marginTop: 30,
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: 'white',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});