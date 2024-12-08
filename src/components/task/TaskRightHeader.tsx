import React from 'react'
import { View } from 'react-native'
import FlatButton from '../ui/FlatButton'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/types/navigation'

function TaskRightHeader() {
    const navigation = useNavigation<NavigationProp>();
    
    return (
        <View>
            <FlatButton 
                onPress={() => navigation.navigate('Task')}
            >
                <Ionicons name='add-circle-outline' color="black" size={36} />
            </FlatButton>
        </View>
    )
}

export default TaskRightHeader;