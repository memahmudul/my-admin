//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CommissionItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,fontWeight:'medium',textTransform:'uppercase'}}>{item.transaction_type}</Text>
            <Text style={{fontSize:20,fontWeight:'bold',textTransform:'uppercase'}}>{item.rate}%</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        
        backgroundColor: 'white',
        padding:10,
        borderRadius:10

        
       
    },
});

//make this component available to the app
export default CommissionItem;
