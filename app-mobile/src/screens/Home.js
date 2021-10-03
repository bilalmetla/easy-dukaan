

import React, {useState} from 'react';
import {
  Button, StyleSheet, Text, View,
  ScrollView
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusinessTypes from "./BusinessTypes";
import StoreDetailsTabs from "../screens/StoreDetailsTabs";


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = (props) => {

  const pressEventForStoreDetail = (id) => {
    console.log('id', id)
    props.navigation.navigate('StoreDetails')
    props.navigation.setParams({
        storeId: id,
      });
  }
  
    return (
    <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor:'#009387'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold'
          }
        }}>
  
          {/* <HomeStack.Screen name="BusinessTypes" component={BusinessTypes}></HomeStack.Screen> */}
          <HomeStack.Screen name="BusinessTypes"   >
            { ()=> <BusinessTypes {...props} handleTouchEvent={pressEventForStoreDetail} />}
           </HomeStack.Screen >  
        
          {/* <HomeStack.Screen name="StoreDetails"   >
            { ()=> <StoreDetails {...props} handleTouchEvent={pressEventForStoreDetail}  />}
           </HomeStack.Screen >   */}
         
        <HomeStack.Screen name="StoreDetails"   >
            { ()=> <StoreDetailsTabs {...props} handleTouchEvent={pressEventForStoreDetail}  />}
           </HomeStack.Screen >  
            
        </HomeStack.Navigator>
    )
  }
  

export default HomeStackScreen;

 