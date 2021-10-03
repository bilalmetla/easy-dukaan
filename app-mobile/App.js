import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
  Button, StyleSheet, Text, View,
  ScrollView
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Constants from "./src/constants";
import LoginStackScreen from "./src/screens/Login";
import HomeStackScreen from "./src/screens/Home";
import MyProducts from "./src/screens/MyProducts";

const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [isLogin, setisLogin] = useState(false);
  useEffect( () => {

      try {
       AsyncStorage
          .getItem(Constants.localStorageKeys.isLogin)
          .then(value => {
            if (value === '1') {
              setisLogin(true)
          }
        })
        
        
      } catch (e) { 
        console.log(e)
      }
      
   // })()
    
    
  }, []);
 

  return (
    <NavigationContainer>

      {isLogin === false &&
        <LoginStackScreen></LoginStackScreen>
      }
      
      {
        isLogin === true &&
        <Drawer.Navigator initialRouteName="Home">
        
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="My Products" component={MyProducts} />
      </Drawer.Navigator>
      }
      
    
    </NavigationContainer>
  );
}

