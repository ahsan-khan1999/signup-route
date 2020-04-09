import React , { useState , useContext} from 'react'
import {  View , StyleSheet } from 'react-native'
import {Text , Button , Input} from 'react-native-elements'
import Margin from "../Components/Margin";
import { Context as AuthContext} from '../context/AuthContext'
// import { useState } from 'react'

const SignupScreen = ({navigation}) => {
    const { state , signup} = useContext(AuthContext);
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    return (
        <View style={style.container}>
            <Margin />
            <Text h4 style={{marginLeft:15}}>Sign Up For Tracker</Text>            
            <Margin />
            <Input  label="Email" 
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            />                       
            <Margin />
            <Input  label="Password " 
            secureTextEntry
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            />
            <Margin />
            <Button title="Sign Up" 
            onPress={() => signup({ email , password})}
            />
        </View>
    )
}
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:200
    }
});

export default SignupScreen;

// <> fragment means dont show any wrapping element whn rendered we cannot apply styling to fragment then we have to make use of view 