//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Alert, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { cancelBalanceRequest, confirmBalanceRequest } from '../../utils/apiRequest';
import { showSuccess,showError } from '../../utils/helperFunction';
import { CANCEL_BALANCE_REQUEST, CONFIRM_BALANCE_REQUEST } from '../../config/urls';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBalanceRequestList } from '../../reduxtooolkit/balanceRequestSlice';

// create a component
const BalanceItem = ({item,onCancel}) => {


  const adminName = useSelector((state)=> state.auth.admin.admin.name)

  



  

  const dispatch = useDispatch()

  

    const createCancelAlert = (id) =>
    Alert.alert('Cancel Balance Request', 'Are you sure you want to cancel balance?', [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
      {
        text: 'OK',
        onPress: async() => {
            const result=  await cancelBalanceRequest(CANCEL_BALANCE_REQUEST,{id})
       
        
        
            if(result[0]==='balance-request-remove-success'){

              dispatch(removeFromBalanceRequestList(id))
             
           
                    showSuccess('removes successfully')
             }else{
                showError('Error Occurred')
             }  
        },
        style: 'cancel',
      },
      
    ]);

    const createConfirmAlert = (email,balance,id) =>
    Alert.alert('Success Balance Request', 'Are you sure you want to add balance?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async() => {
        const result=  await confirmBalanceRequest(CONFIRM_BALANCE_REQUEST,{email,balance,id})

        
        if(result[0]==='balance-request-confirm-success'){

          dispatch(removeFromBalanceRequestList(id))
         
       
                showSuccess('Balance Added Successfully')
         }else{
            showError('Error Occurred')
         }  
        
      }},
    ]);

   
    return (
    
        adminName===item.admin? 
        <View style={styles.container}>
           <View style={styles.left}>
           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Name : </Text>
            <Text>{item.name}</Text>
           </View>

           <View style={{display:'flex',flexDirection:'row'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Sent From : </Text>
            <Text>{item.sender_phone}</Text>
           </View>

           <View style={{display:'flex',flexDirection:'row'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Transaction ID : </Text>
            <Text>{item.trx_id}</Text>
           </View>

           <View style={{display:'flex',flexDirection:'row'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Amount : </Text>
            <Text>{item.amount}</Text>
           </View>

           </View>

           

           <View style={styles.right}>

           <Button title={'Confirm'} onPress={()=>createConfirmAlert(item.email,item.amount,item._id)} />
          
        

        <Button title={'Cancel'} onPress={()=>createCancelAlert(item._id)} />

           </View>
        </View> : ''

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
export default BalanceItem;
