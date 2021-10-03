
import React, {useState, useEffect} from 'react';
import {
  Button, StyleSheet, Text, View,
    ScrollView,
    TouchableOpacity,
    Animated,
    FlatList, 
  Dimensions,
  Alert
} from 'react-native';


import RegisteredStores from "./RegisteredStores";
import { get } from "../services/http";

export default function BusinessTypes(props) {
    const [items, setitems] = useState([]);

    const [storesList, setstoresList] = useState([]);

    
    useEffect(() => {
        init().then(console.log)
    }, []);

    async function init() {
        try {
            let data = await get('/businesses/types')
            if(!data || !data.list){}
            setitems(data.list || [])
            let businessType = data.list[0].businessType
            let stores = await get(`/suppliers/${businessType}`)
            setstoresList(stores)
            return {end: true}
        } catch (e) {
            console.log(e)
        }
        
    }
    const handlePressEvent = async(businessType) => {
        let stores = await get(`/suppliers/${businessType}`)
        setstoresList(stores)
        
    }
     return (
      <>
         <ScrollView
             horizontal={true}
             style={styles.horizentalList}
         >

             {
                 items.map(it => {
                     return <TouchableOpacity
                         key={it.businessType}
                         onPress={()=>handlePressEvent(it.businessType)}
                     >
                         <Text
                             style={styles.item}
                         >{it.businessType}</Text>
                     </TouchableOpacity>
                 })
             }
         </ScrollView>

             <RegisteredStores {...props}
                 data={storesList}
             ></RegisteredStores>
           
         
             </>
        
    );
}
  

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
        // backgroundColor: 'blue',
        maxHeight:50,
      
      
    },
    item: {
      backgroundColor: '#4ae1fa',
       justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center',
        margin: 5,
      
    }
  });