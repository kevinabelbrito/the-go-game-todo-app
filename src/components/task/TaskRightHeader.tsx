import React from 'react'
import { StyleSheet, View } from 'react-native'
import FlatButton from '../ui/FlatButton'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/types/navigation'
import { useAuthStore } from '@/store/AuthStore'

function TaskRightHeader() {
    const { logOut } = useAuthStore();

    const navigation = useNavigation<NavigationProp>();
    
    return (
        <View style={styles.container}>
            <FlatButton 
                onPress={() => navigation.navigate('Task')}
            >
                <Ionicons name='add-circle-outline' color="black" size={36} />
            </FlatButton>
            <FlatButton 
                onPress={logOut}
            >
                <Ionicons name='log-out-outline' color="black" size={36} />
            </FlatButton>
        </View>
    )
}

export default TaskRightHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 5,
    }
});