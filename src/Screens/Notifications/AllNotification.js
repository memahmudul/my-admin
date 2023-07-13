//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_NOTIFICATION } from '../../config/urls';
import { setNotificationList } from '../../reduxtooolkit/notificationSlice';
import { showError } from '../../utils/helperFunction';
import { getAllNotification } from '../../utils/apiRequest';
import NotificationItem from './NotificationItem';

// create a component
const AllNotification = () => {
    const dispatch = useDispatch()

    

    const data = useSelector((state)=> state.notification.notificationList)


    

    const onRefresh = async()=>{
       
        
        const result=  await getAllNotification(GET_ALL_NOTIFICATION,{})


        console.log(result);
       
        
        
        if(result[0]==='notification-fetch-success'){
            
            dispatch(setNotificationList(result[1]))
         
       
                
         }else{

            
            showError('Error Occurred')
            
         }  
        
 
     }






    useEffect(() => {
        onRefresh()
      }, [])
    return (
        
        
        <ScrollView>
        <View style={styles.container}>
        {
            data.map((item)=>{
                return (
                    <NotificationItem item={item} key={item._id}/>
                )

            })
        }
    </View>
    </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        display:'flex',
        flexDirection:'column',
        gap:10,
        
        padding:10,
       
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AllNotification;
