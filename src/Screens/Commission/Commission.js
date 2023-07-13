//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GET_COMMISSION_LIST } from '../../config/urls';
import { getCommissionList } from '../../utils/apiRequest';
import CommissionItem from './CommissionItem';
import ButtonWithLoader from '../../components/ButtonWithLoader';

// create a component
const Commission = ({navigation}) => {
    

    const [commissionList, setCommissionList] = useState([])



    const onRefresh = async()=>{
       
        
        const result=  await getCommissionList(GET_COMMISSION_LIST,{})
       
        
        
        if(result[0]==='commission-fetch-success'){
            setCommissionList(result[1])
            
           
         
       
                
         }else{
            showError('Error Occurred')
         }  
        
 
     }


    



     useEffect(() => {
       onRefresh()
     }, [])


     const navigateToEditCommisssion = (data)=>{
        navigation.navigate('EditCommission',{data})

     }



    return (
        <View style={styles.container}>
        
           {commissionList.map((item,index)=>{
            return <CommissionItem item={item} key={index}/>
           })}

           <ButtonWithLoader text="কমিশন এডিট করুন" onPress={()=>{navigateToEditCommisssion(commissionList)}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: '#2c3e50',
        padding:10,
        gap:10
    },
});

//make this component available to the app
export default Commission;
