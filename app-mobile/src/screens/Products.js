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
import CustomModal from "../components/Modal";


export default function Products({ route }) {
     const [modal, setmodal] = useState(false);
    console.log('route.params', route.params)
     const handleTouchEvent = () => { }
     
     
    return (
        <>
            {/* <CustomModal
               
            /> */}
            <ScrollView style={styles.content}>
                <TouchableOpacity
                    onPress={()=> setmodal(true)}

                >
                    <Image
                        source={require('../../assets/icon.png')}
                        style={{
                            width: 200,
                            height: 200,
                            
                        }}
                    />
                    <Text>Dall Mong</Text>
                    <Text>Net Weight: 25KG</Text>
                    <Text>Rs. 2500</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={()=> setmodal(true)}

                >
                    <Image
                        source={require('../../assets/icon.png')}
                        style={{
                            width: 200,
                            height: 200,
                            
                        }}
                    />
                    <Text>Dall Chana</Text>
                    <Text>Net Weight: 25KG</Text>
                    <Text>Rs. 2500</Text>
               </TouchableOpacity>
                
               
            </ScrollView>
            <Button
            title={`Check Out Cart`}
            ></Button>
            
           
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        fle:1
    },
    modalView: {
        margin: 0,
        justifyContent: 'flex-end'
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
         alignItems: 'flex-end'
    },
    content: {
        width: '95%',
        height: '50%',
        backgroundColor: 'white',
        overflow: 'hidden',
      },
})