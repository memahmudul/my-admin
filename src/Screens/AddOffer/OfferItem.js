//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { removeFromBOfferList } from '../../reduxtooolkit/offerSlice';
import { showError, showSuccess } from '../../utils/helperFunction';
import { useDispatch } from 'react-redux';
import { deleteAnOffer } from '../../utils/apiRequest';
import { DELETE_AN_OFFER } from '../../config/urls';

// create a component
const OfferItem = ({item}) => {

    const dispatch = useDispatch()
    

    const createDeleteAlert = (id) =>
    Alert.alert('Delete Offer', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async() => {
        const result=  await deleteAnOffer(DELETE_AN_OFFER,{id})

        
        if(result[0]==='delete-offer-success'){
            dispatch(removeFromBOfferList(id))
            

     
         
       
                showSuccess('Offer Successfully Deleted')
         }else{

            
            showError('Error Occurred')
         }  
        
      }},
    ]);
    return (
        <View style={styles.container}>
        <View style={styles.left}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Operator : </Text>
          <Text>{item.operator}</Text>
          
         </View>

         <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Offer Type : </Text>
          <Text>{item.offer_type}</Text>
          
         </View>

         <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Offer Name : </Text>
          <Text>{item.name}</Text>
          
         </View>

         

         <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Validity : </Text>
          <Text>{item.validity}</Text>
          
         </View>

         <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Price : </Text>
          <Text>{item.price}</Text>
          
         </View>

         

         
        </View>
        

        <View style={styles.right}>
        <Button title={'Delete'} onPress={()=>createDeleteAlert(item._id)} />
        
      

      

        </View>
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

   
    left:{
        display:'flex',
        flexDirection:'column',
        gap:2
    },

    right:{
        display:'flex',
        flexDirection:'column',
        gap:2
    },
});

//make this component available to the app
export default OfferItem;
