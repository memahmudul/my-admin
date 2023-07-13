//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GET_BALANCE_REQUEST_LIST } from '../../config/urls';
import { showError } from '../../utils/helperFunction';
import { getBalanceRequestList } from '../../utils/apiRequest';
import BalanceItem from './BalanceItem';
import { useDispatch, useSelector } from 'react-redux';
import { setBalanceRequestList } from '../../reduxtooolkit/balanceRequestSlice';

// create a component
const BalanceRequest = () => {

    const dispatch = useDispatch()

    const data = useSelector((state)=> state.balanceRequest.balanceRequestList)
   
   


    const onRefresh = async()=>{
       
        
        const result=  await getBalanceRequestList(GET_BALANCE_REQUEST_LIST,{})
       
        
        
        if(result[0]==='balance-fetch-success'){
            
            dispatch(setBalanceRequestList(result[1]))
         
       
                
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
                        <BalanceItem item={item} key={item._id}/>
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
export default BalanceRequest;
