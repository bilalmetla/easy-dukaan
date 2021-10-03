
import React, {useState} from 'react';
import {
  Button, StyleSheet, Text, View,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeStackScreen from "./Home";
import OTPCodeScreen from "./OTPCodeScreen";
import StoreInfo from "./StoreInfo";
import Constants from "../constants";
import { post } from "../services/http";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setmobileNumber] = useState('');

  const onPressHandle = async () => {
    try {
      if (!mobileNumber || mobileNumber.length < 10) {
         return Alert.alert('Warning', 'Please Enter Correct Mobile Number')
      } 

      await AsyncStorage.setItem(Constants.localStorageKeys.mobileNumber, mobileNumber)
      let result =  await post('/users/activation', {payload: {mobileNumber}})
        
        if (!result) {
          return Alert.alert('Warning', 'Some Error Occured!')

      }
      if (result.code === "2001") {
        
        navigation.navigate('OTPCode')
      }
        
      
      
    } catch (e) {
      console.log(e)
    }
  }
    return (
      <View
        style={styles.container}
      >
        <Text>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="03015339780"
          onChangeText={(value)=>setmobileNumber(value)}
        ></TextInput>
        <Button
          title="Send"
        onPress={onPressHandle}
        ></Button>
      </View>
    )
}
  
const LoginStack = createNativeStackNavigator();


const LoginStackScreen = () => {
    return (
  <LoginStack.Navigator >
  
        {/* LoginScreen */}
          <LoginStack.Screen name="Login" component={LoginScreen}></LoginStack.Screen>
          <LoginStack.Screen name="OTPCode" component={OTPCodeScreen}></LoginStack.Screen>
          <LoginStack.Screen name="StoreInfo" component={StoreInfo}></LoginStack.Screen>
          <LoginStack.Screen name="Home" component={HomeStackScreen}></LoginStack.Screen>
  
        </LoginStack.Navigator>
    )
}
  
export default LoginStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  input: {
    width:300,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    
  }
})