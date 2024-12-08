import { Task } from "@/interfaces/task";
import { FlatList, FlatListProps, ListRenderItem, Text, View } from "react-native"
import TaskListElement from "./TaskListElement";

interface TaskListProps {
    tasks: Task[];
}

function renderItemElement(itemData: any) {
    return <TaskListElement {...itemData?.item} />
}

function TaskList({tasks}: TaskListProps) {
    return (
        <FlatList
            data={tasks}
            renderItem={renderItemElement}
            keyExtractor={(item) => item?.id}
        />
    )
}

export default TaskList;