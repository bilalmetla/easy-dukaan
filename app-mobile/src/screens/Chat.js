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


export default function Chat ({ route }) {
    console.log('route.params', route.params)

    return (
        <>
            <ScrollView>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                
            </ScrollView>

            <View style={styles.input}>
                <TextInput placeholder={`type message..`} />
            </View>
            <Button title="send"></Button>
        </>
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