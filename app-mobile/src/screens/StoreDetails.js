

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


const storeDetailRecord = {
    image: '../../assets/icon.png',
    storeName: 'Bismillaha General Store',
    name: 'Malik Adnan',
    addressLine: 'Sabzi Mandi Islambad, shop no 201',
    businessTypes: ['General Store'],
    location: {
        type: 'Point',
        coordinates:[]
    },
    mobileNumber: '03015339780',
    
}

const StoreDetails = function ({route}) {
    const [storeDetails, setstoreDetails] = useState({});
    console.log('route.params', route.params)

    useEffect(() => {
        setstoreDetails(storeDetailRecord)
    }, []);
    
    return (
        <>
            <View>
                <Image
                    source={require('../../assets/icon.png')}
                    style={{
                        width: '90%',
                        height: 200,
                        margin: '3%'
                    }}
                />
                <Text>{`Store Name: ${storeDetails.storeName}`}</Text>
                <Text>{ `Owner Name: ${storeDetails.name}` }</Text>
                <Text>{ `Address: ${storeDetails.addressLine}` }</Text>
                <Text>{ `Phone:${storeDetails.mobileNumber}` }</Text>
                <Text>{ `Location`}</Text>
            </View>
        </>
    )
}
 

export default StoreDetails;