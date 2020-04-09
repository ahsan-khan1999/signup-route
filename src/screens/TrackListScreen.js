import React from 'react'
import { Text , View , StyleSheet, Button} from 'react-native'
const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text>traclListScrren Here</Text>
            <Button title="GO to details" onPress={() => {navigation.navigate('TrackDetail')}}/>
        </View>
    )
}

const style = StyleSheet.create({});

export default TrackListScreen;