//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { showError, showSuccess } from '../../utils/helperFunction';
import { getAllOrder, getCommissionList, getMobileBankingOrder } from '../../utils/apiRequest';
import MobileBankingItem from './MobileBankingItem';
import { setMobileBankingOrderList } from '../../reduxtooolkit/orderSlice';
import { FETCH_MOBILE_BANKING_TRANSACTION, GET_COMMISSION_LIST } from '../../config/urls';

// create a component
const MobileBanking = () => {
    const dispatch = useDispatch()


    const adminData = useSelector((state)=> state.auth.admin)

    

   


    

    

    const data = useSelector((state)=> state.order.mobileBankingOrderList)

    const pendingData= data.filter((item)=>item.status==='pending')
    


    const [commissionList, setCommissionList] = useState([])



    const onRefresh = async()=>{
       
        
        const result=  await getMobileBankingOrder(FETCH_MOBILE_BANKING_TRANSACTION,{})

        const commissionResult = await getCommissionList(GET_COMMISSION_LIST,{})

        if(commissionResult[0]==='commission-fetch-success'){
             
       setCommissionList(commissionResult[1])

       
        
        
        if(result[0]==='mobile-banking-order-fetch-success'){
         
       
            
            dispatch(setMobileBankingOrderList(result[1]))
         
       
                
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
                        <MobileBankingItem item={item} key={index} commission={commission} admin_name={adminData.admin.name}/>
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
export default MobileBanking;
