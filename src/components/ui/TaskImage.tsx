import { Image, StyleSheet, View } from "react-native"

function TaskImage() {
    return (
        <View style={styles.rootContainer}>
            <Image
                source={require('@images/goal.png')} 
                style={styles.image}
            />
        </View>
    )
}

export default TaskImage;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        margin: 20,
    },
});