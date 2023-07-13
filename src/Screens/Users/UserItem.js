//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Alert, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { showSuccess,showError } from '../../utils/helperFunction';
import { deleteUser } from '../../utils/apiRequest';
import { DELETE_USER } from '../../config/urls';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromUserList } from '../../reduxtooolkit/userSlice';


// create a component
const UserItem = ({item}) => {

    const adminName = useSelector((state)=> state.auth.admin.admin.name)
    

    const dispatch = useDispatch()



  

    // const createEditAlert = (id) =>
    // Alert.alert('Edit User', 'Are you sure you want to edit user?', [
    //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
    //   {
    //     text: 'OK',
    //     onPress: async() => {
    //         const result=  await cancelBalanceRequest(CANCEL_BALANCE_REQUEST,{id})
       
        
        
    //         if(result[0]==='balance-request-remove-success'){

    //           dispatch(removeFromBalanceRequestList(id))
             
           
    //                 showSuccess('removes successfully')
    //          }else{
    //             showError('Error Occurred')
    //          }  
    //     },
    //     style: 'cancel',
    //   },
      
    // ]);

    const createDeleteAlert = (email) =>
    Alert.alert('Delete User', 'Are you sure you want to delete user?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async() => {
        const result=  await deleteUser(DELETE_USER,{email})
        

        
        if(result[0]==='users-delete-success'){
            dispatch(removeFromUserList(email))
           
            
          


                showSuccess('User Deleted Successfully')
         }else{
            showError(result[0])
         }  
        
      }},
    ]);


   


   
    return (
    
        adminName===item.admin? 
        
        <View style={styles.container}>
           <View style={styles.left}>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Admin : </Text>
            <Text>{item.admin}</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Name : </Text>
            <Text>{item.name}</Text>
           </View>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Username : </Text>
            <Text>{item.username}</Text>
           </View>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Email : </Text>
            <Text>{item.email}</Text>
           </View>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Phone : </Text>
            <Text>{item.phone}</Text>
           </View>

           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Balance: </Text>
            <Text>{item.balance}</Text>
           </View>

         

           </View>

           <View style={styles.right}>

           {/* <Button title={'Confirm'} onPress={()=>createConfirmAlert(item.email,item.amount,item._id)} /> */}
          
        

        <Button title={'Delete'} onPress={()=>createDeleteAlert(item.email)} />

           </View>

           

           <View style={styles.right}>

           
          
        

       

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
export default UserItem;
