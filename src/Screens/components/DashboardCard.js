//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const DashboardCard = ({onPress,text}) => {
    return (
        <View style={{padding:5, width:'30%'}} onStartShouldSetResponder={()=>onPress()
        }>
          <View style={styles.cardShadow}>
  <View style={styles.cardContainer}>
  
  <Text style={{fontSize:13,color:'#EE2424',textAlign:'center'}}> {text}</Text>
   
    
  </View>
 </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    cardShadow: {
       
        borderRadius: 10,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
       },
       cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:10
       },
  
});

//make this component available to the app
export default DashboardCard;
