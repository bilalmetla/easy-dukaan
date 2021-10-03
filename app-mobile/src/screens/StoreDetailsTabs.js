

import React, {useState, useEffect} from 'react';
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

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StoreDetails from "./StoreDetails";
import Chat from "./Chat";
import ProductsCategoryStackScreen from "./ProductCategories";

const Tab = createMaterialTopTabNavigator();

export default function StoreDetailsTabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Detail"   >
            { ()=> <StoreDetails {...props}   />}
            </Tab.Screen > 
            <Tab.Screen name="Chat"   >
            { ()=> <Chat {...props}   />}
           </Tab.Screen > 
            
            <Tab.Screen name="Products"   >
            { ()=> <ProductsCategoryStackScreen {...props}   />}
            </Tab.Screen > 
            
      </Tab.Navigator>
    );
}