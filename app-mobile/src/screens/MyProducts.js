
import React, {useState, useEffect} from 'react';
import {
  Button, StyleSheet, Text, View,
  ScrollView
} from 'react-native';
import { get } from "../services/http";

const MyProducts = function () {
    const [categories, setcategories] = useState(initialState);

    useEffect(() => {
        fetchCategoriesList ().catch(console.log)
    }, []);
    

    async function fetchCategoriesList() {
        let businessType = 'test'
        let categories = await get(`/products/catagories/${businessType}`)
        setcategories(categories)
    }

    return (
        <>hello</>
    )
};

export default MyProducts;