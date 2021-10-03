import React, {useState, useEffect} from 'react';
import {
  Button, StyleSheet, Text, View,
    ScrollView,
    Image,
    TouchableOpacity,
    Animated,
    FlatList, 
  Dimensions,
  Alert,
  TextInput
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "./Products";



const Stack = createNativeStackNavigator();


 function ProductCategories ({ route, navigation }) {
    console.log('route.params', route.params)
     const handleTouchEvent = () => {
         console.log('product category touched...')
        navigation.navigate('Product Details')
    }
    return (
        <>
           
            <ScrollView>
                <TouchableOpacity
                    onPress={()=>{handleTouchEvent()}}

                >
                    <Image
                        source={require('../../assets/icon.png')}
                        style={{
                            width: 200,
                            height: 100,
                            
                        }}
                    />
                    <Text>Dall</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={()=>{handleTouchEvent()}}

                >
                    <Image
                        source={require('../../assets/icon.png')}
                        style={{
                            width: 200,
                            height: 100,
                            
                        }}
                    />
                    <Text>Murge</Text>
               </TouchableOpacity>
                
            </ScrollView>

           
        </>
    )
}
 

export default function ProductsCategoryStackScreen (props) {
    return (
  <Stack.Navigator >
            
            <Stack.Screen name="Product Categories"   >
            { ()=> <ProductCategories {...props}  />}
           </Stack.Screen >
            
            <Stack.Screen name="Product Details"   >
            { ()=> <Products {...props}  />}
           </Stack.Screen >
  
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        height: 50,
        margin: 5,
    }
})