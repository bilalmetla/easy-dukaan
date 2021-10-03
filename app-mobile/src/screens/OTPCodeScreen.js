

import React, {useState, useEffect} from 'react';
import {
  Button, StyleSheet, Text, View,
  TextInput,
  Alert
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "../constants";
import { post } from "../services/http";

const OTPCodeScreen = ({ navigation }) => {
    const [OTPCode, setOTPCode] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');

    useEffect(() => {
       
        (async () => {
            try {
                let mobileNumber = await AsyncStorage.getItem(Constants.localStorageKeys.mobileNumber);
                if (!mobileNumber || mobileNumber.length < 10) {
                    return navigation.navigate('Login');
                }
                setmobileNumber(mobileNumber)
            } catch (e) {
                console.log(e)
                }
        })()
    }, []);

  const onPressHandle = async () => {
      try {
       
          if (!OTPCode) {
              return Alert.alert('Warning', 'Please Enter OTP Code')
          }

          let result = await post('/users/activation/verify', {
              payload: {
                  mobileNumber,
                  code: OTPCode
              }
          })
        
        if (!result) {
            return Alert.alert('Warning', 'Some Error Occured!');
          }
          
          if (result.code === "2002") {
            await AsyncStorage.setItem(Constants.localStorageKeys.isLogin, 1)
            return navigation.navigate('Home')
        }
        if (result.code === "2001") {
               return navigation.navigate('StoreInfo')
        }
        
      
      
    } catch (e) {
      console.log(e)
    }
  }
    return (
      <View
        style={styles.container}
      >
        <Text>Enter Your OTP Code</Text>
        <TextInput
          style={styles.input}
          placeholder="389452"
          onChangeText={(value)=>setOTPCode(value)}
        ></TextInput>
        <Button
          title="Verify"
        onPress={onPressHandle}
        ></Button>
      </View>
    )
}
  
export default OTPCodeScreen;


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