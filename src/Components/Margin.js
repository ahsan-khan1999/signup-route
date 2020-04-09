import React from 'react'
import {View , StyleSheet} from 'react-native'

const Margin = ({childern}) => {
    return(
        <View style={styles.space}>{childern}</View>
    )

    
}
const styles = StyleSheet.create({
    space:{
        margin:10
    }
})

export default Margin;