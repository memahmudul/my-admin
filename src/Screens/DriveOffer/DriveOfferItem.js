//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { performTransaction } from '../../utils/apiRequest';
import { PERFORM_TRANSACTION } from '../../config/urls';
import { removeFromOfferOrderList } from '../../reduxtooolkit/orderSlice';
import { showError, showSuccess } from '../../utils/helperFunction';

// create a component
const DriveOfferItem = ({item,commission}) => {

    
    const dispatch = useDispatch()

    
  


    

    const createFailedAlert = (id,sender_email,transaction,amount,commission) =>
    Alert.alert('Failed Drive Offer', 'Are you sure you want to make it failed?', [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
      {
        text: 'OK',
        onPress: async() => {
            const result=  await performTransaction(PERFORM_TRANSACTION,{id,status:'failed',email:sender_email,transaction,amount,commission})
       
        
        
            if(result[0]==='perform-transaction-success'){
                dispatch(removeFromOfferOrderList(id))
    
         
             
           
                    showSuccess('Successfully status edited to failed')
             }else{
    
                
                showError('Error Occurred')
             } 
        },
        style: 'cancel',
      },
      
    ]);

    

    const createSuccessAlert = (id,sender_email,transaction,amount,commission) =>
    Alert.alert('Success Drive Offer', 'Are you sure you want to make it success?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async() => {
        const result=  await performTransaction(PERFORM_TRANSACTION,{id,status:'success',email:sender_email,transaction,amount,commission})

        
        if(result[0]==='perform-transaction-success'){
            dispatch(removeFromOfferOrderList(id))

     
         
       
                showSuccess('Successfully status edited to success')
         }else{

            
            showError('Error Occurred')
         }  
        
      }},
    ]);
    return (
        <View style={styles.container}>
          <View style={styles.left}>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Admin : </Text>
            <Text>{item.admin}</Text>
            
           </View>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Recipient : </Text>
            <Text>{item.recipient}</Text>
            
           </View>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Operator : </Text>
            <Text>{item.operators}</Text>
            
           </View>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Offer Name : </Text>
            <Text>{item.offer_name}</Text>
            
           </View>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Price : </Text>
            <Text>{item.price}</Text>
            
           </View>

           
           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Sender Email : </Text>
            <Text>{item.sender_email}</Text>
            
           </View>

           

           
          </View>
          

          <View style={styles.right}>
          <Button title={'Success'} onPress={()=>createSuccessAlert(item._id,item.sender_email,item.transaction,item.price,commission)} />
          
        

        <Button title={'Failed'} onPress={()=>createFailedAlert(item._id,item.sender_email,item.transaction,item.price,commission)} />

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
export default DriveOfferItem;
