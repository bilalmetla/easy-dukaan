

import React, {useState, useEffect} from 'react';
import {
  Button, StyleSheet, Text, View,
  TextInput,
    Alert,

} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Picker} from '@react-native-picker/picker';
import Constants from "../constants";
import { post } from "../services/http";

const StoreInfo = ({ navigation }) => {
    const [name, setname] = useState('');
    const [businessName, setbusinessName] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [addressLine, setaddressLine] = useState('');
    const [businessType, setbusinessType] = useState();
    const [cnic, setcnic] = useState('');

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
          console.log('onPressHandle clicked..')
        //   if (!name
        //       || !businessName
        //       || !addressLine
        //       || !cnic
              
        //   ) {
        //     return Alert.alert('Warning', 'Please Enter All Required Information')
        // }
          const storeData = {
              name,
              businessName,
              addressLine,
              mobileNumber,
              cnic,
              location: {
                  type: "Point",
                  coordinates:[]
              }
              
          }
          storeData.businessType = []
          storeData.businessType.push(businessType)

          let result = await post('/users', {
              payload: {
                  ...storeData
              }
          })
        
        if (!result) {
            return Alert.alert('Warning', 'Some Error Occured!');
          }
          

        if (result.code === "2001") {
                await AsyncStorage.setItem(Constants.localStorageKeys.isLogin, 1)
               return navigation.navigate('Home')
        }
        
      
      
    } catch (e) {
      console.log(e)
    }
  }
    return (
        <>
      <View
        style={styles.container}
      >
        <Text>Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Rizwan"
          onChangeText={setname}
            ></TextInput>
            
            <Text>Store Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Bismillaha General Store"
          onChangeText={setbusinessName}
            ></TextInput>

        <Text>CNIC Number</Text>
        <TextInput
          style={styles.input}
          placeholder="3444522344"
          onChangeText={setcnic}
            ></TextInput>


        <Text>Business Type</Text>
            <Picker
                style={{
                    with:300,
                }}
        selectedValue={businessType}
        onValueChange={(itemValue, itemIndex) =>
            setbusinessType(itemValue)
        }>
        <Picker.Item label="Kiryana & General Store" value="Kiryana & General Store" />
        <Picker.Item label="Medial Store & Baby Care" value="Medial Store & Baby Care" />
        <Picker.Item label="Fruit & Vegetable" value="Fruit & Vegetable" />
        <Picker.Item label="WholeSaler" value="WholeSaler" />
        <Picker.Item label="Sales Man" value="Sales Man" />
        <Picker.Item label="Khokha & Confectionary" value="Khokha & Confectionary" />
        <Picker.Item label="Electronics" value="Electronics" />
        <Picker.Item label="Stationary" value="Stationary" />
        <Picker.Item label="Resturants, Pakwaan & Dhaba" value="Resturants, Pakwaan & Dhaba" />
        <Picker.Item label="Resturants, Pakwaan & Dhaba" value="Resturants, Pakwaan & Dhaba" />
        <Picker.Item label="Others" value="Others" />
  
        </Picker>
            

            
            
        <Text>Store Address</Text>
        <TextInput
          style={styles.input}
          placeholder="islamabad g11/2"
          onChangeText={setaddressLine}
                ></TextInput>
                

            </View>
            
            <Button
                style={{
                    margin: 10,
                }}
          title="Confirm Details"
        onPress={onPressHandle}
            ></Button>

      </>
            )
}
  
export default StoreInfo;


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