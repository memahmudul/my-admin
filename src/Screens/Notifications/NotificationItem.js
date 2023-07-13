//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../../utils/apiRequest';
import { DELETE_NOTIFICATION } from '../../config/urls';
import { removeFromNotificationList } from '../../reduxtooolkit/notificationSlice';
import { showError, showSuccess } from '../../utils/helperFunction';

// create a component
const NotificationItem = ({item}) => {

    const dispatch = useDispatch()




    const createDeleteAlert = (id) =>
    Alert.alert('Delete Notification', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async() => {
        const result=  await deleteNotification(DELETE_NOTIFICATION,{id})

        
        if(result[0]==='delete-notification-success'){
            dispatch(removeFromNotificationList(id))
            

     
         
       
                showSuccess('Notification Successfully Deleted')
         }else{

            
            showError('Error Occurred')
         }  
        
      }},
    ]);
    return (
        
        <View style={styles.container}>
            <View style={styles.left}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Title : </Text>
          <Text>{item.title}</Text>
          
         </View>

         <View style={{display:'flex',flexDirection:'row',alignItems:'center',maxWidth:260}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Message : </Text>
          <Text>{item.message}</Text>
          
         </View>

         <Button title={'Delete'} onPress={()=>createDeleteAlert(item._id)} />


       
         

         
        </View>
        

        <View style={styles.right}>
        
        
        
      

      

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
export default NotificationItem;
