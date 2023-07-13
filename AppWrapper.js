//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAdminData } from './src/utils/asyncStorage';
import { saveAdminData } from './src/reduxtooolkit/authSlice';
import { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import Routes from "./src/Navigations/Route"

// import Routes from './Navigations/Route';
import { useDispatch } from 'react-redux';




// create a component
const AppWrapper = () => {
    const dispatch = useDispatch()

    useEffect(()=>{

        (async()=>{
          const adminData = await getAdminData()
          
          if(!!adminData){
           dispatch( saveAdminData(adminData))
          }  
        })();
      },[])
    return (
        <>
         <Routes/>
    <FlashMessage position="top"/>
    </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AppWrapper;
