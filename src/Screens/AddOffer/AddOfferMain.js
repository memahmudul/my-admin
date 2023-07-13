//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const AddOfferMain = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{padding:5, width:'30%'}} onStartShouldSetResponder={()=> navigation.navigate('AddOffer')
        }>
          <View style={styles.cardShadow}>
  <View style={styles.cardContainer}>
  
  <Text style={{fontSize:13,color:'#EE2424',textAlign:'center'}}> Add New Offer</Text>
   
    
  </View>
 </View>
        </View>


        <View style={{padding:5, width:'30%'}} onStartShouldSetResponder={()=> navigation.navigate('AllOffer')
        }>
          <View style={styles.cardShadow}>
  <View style={styles.cardContainer}>
  
  <Text style={{fontSize:13,color:'#EE2424',textAlign:'center'}}>All Offer</Text>
   
    
  </View>
 </View>
        </View>




        
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap:'wrap',
        gap:10,
       
       
    },

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
export default AddOfferMain;
