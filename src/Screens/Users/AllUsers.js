//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DELETE_USER, GET_ALL_USERS } from '../../config/urls';
import { deleteUser, getAllUsers } from '../../utils/apiRequest';
import UserItem from './UserItem';
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../../reduxtooolkit/userSlice';

// create a component
const AllUsers = () => {
  const dispatch = useDispatch()
  

  const data = useSelector((state)=> state.user.userList)

    

   


    const onRefresh = async()=>{
       
        
        const result=  await getAllUsers(GET_ALL_USERS,{})
       
        
        
        if(result[0]==='users-fetch-success'){

          dispatch(setUserList(result[1]))
            
         
         
       
                
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
                data.map((item,index)=>{
                    return <UserItem item={item} key={index}/>

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
export default AllUsers;
