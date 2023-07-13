//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setOfferList } from '../../reduxtooolkit/offerSlice';
import { showError, showSuccess } from '../../utils/helperFunction';
import { getAllOffer } from '../../utils/apiRequest';
import { GET_ALL_OFFER } from '../../config/urls';
import OfferItem from './OfferItem';

// create a component
const AllOffer = () => {

    const dispatch = useDispatch()

    

    const data = useSelector((state)=> state.offer.offerList)

    const onRefresh = async()=>{
       
        
        const result=  await getAllOffer(GET_ALL_OFFER,{})
       
        
        
        if(result[0]==='offer-fetch-success'){
            
            dispatch(setOfferList(result[1]))
         
       
                
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
                    <OfferItem item={item} key={item._id}/>
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
export default AllOffer;
