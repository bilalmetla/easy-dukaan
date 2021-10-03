import React, {useState} from 'react';
import {
  Button, StyleSheet, Text, View,
    ScrollView,
    Image,
    TouchableOpacity,
    Animated,
    FlatList, 
  Dimensions,
  Alert
} from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoreDetails from "./StoreDetails";

 const Stack = createNativeStackNavigator();

const RegisteredStores = function (props) {
    
    return (
        <>
        <ScrollView
        style={styles.horizentalList}
        >
            {
                props.data.map((store, index) => { 
                    return  <TouchableOpacity
                        style={styles.item}
                        key={`${index}-store`}
                        onPress={()=>{props.handleTouchEvent(store.id || index)}}
                    >
                       <Image
                            source={require('../../assets/icon.png')}
                            style={{
                                width: '95%', height: 200,
                                margin:'3%',
                            }}
                        />  
                        <Text>{ store.storeName }</Text>
                        <Text>{ store.name }</Text>
                        <Text>{ store.addressLine }</Text>
                    </TouchableOpacity>
                })
            }
           

            
            </ScrollView>


            </>
        
    )
};

export default RegisteredStores;


const RegisteredStoresStackScreen = (props) => {
    return (
  <Stack.Navigator >
  
            <Stack.Screen name="Stores"   >
            { ()=> <RegisteredStores {...props}  />}
            </Stack.Screen >
            
            <Stack.Screen name="StoreDetails"   >
            { ()=> <StoreDetails {...props}  />}
           </Stack.Screen >
  
        </Stack.Navigator>
    )
}
  
//export default RegisteredStoresStackScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    horizentalList: {
      flex: 1,
    //    flexDirection:'column',
        // backgroundColor: 'red',
      
      
    },
    item: {
      backgroundColor: '#4ae1fa',
    //    justifyContent: 'center',
    //   alignItems: 'center',
    //   textAlign:'center',
        margin: 5,
      
    }
  });