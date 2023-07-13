//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCommissionList, getOfferOrder } from '../../utils/apiRequest';
import { FETCH_OFFER_PACKAGE_TRANSACTION, GET_COMMISSION_LIST } from '../../config/urls';
import { setOfferOrderList } from '../../reduxtooolkit/orderSlice';
import { showError, showSuccess } from '../../utils/helperFunction';
import DriveOfferItem from './DriveOfferItem';

// create a component
const DriveOffer = () => {
    const dispatch = useDispatch()

    const data = useSelector((state)=> state.order.offerOrderList)

    const pendingData= data.filter((item)=>item.status==='pending')
    


    const [commissionList, setCommissionList] = useState([])


    const onRefresh = async()=>{
       
        
        const result=  await getOfferOrder(FETCH_OFFER_PACKAGE_TRANSACTION,{})

        const commissionResult = await getCommissionList(GET_COMMISSION_LIST,{})

        if(commissionResult[0]==='commission-fetch-success'){
             
       setCommissionList(commissionResult[1])

       
        
        
        if(result[0]==='offer-order-fetch-success'){
         
       
            
            dispatch(setOfferOrderList(result[1]))
         
       
                
         }else{
           
            showError('Error Occurred')
         }  
        
 
     }
    }

    const commission = commissionList[0]?.rate;





    



    useEffect(() => {
      onRefresh()
    }, [])

    
    

    
    return (
        
        <ScrollView>
            <View style={styles.container}>
           {
            pendingData.map((item,index)=>{
                    return (
                        <DriveOfferItem item={item} key={index} commission={commission}/>
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
export default DriveOffer;
