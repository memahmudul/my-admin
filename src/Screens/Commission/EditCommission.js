//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { editCommissionValidation } from '../../utils/validations';
import { showError, showSuccess } from '../../utils/helperFunction';
import { editCommission } from '../../utils/apiRequest';
import { EDIT_COMMISSION } from '../../config/urls';

// create a component
const EditCommission = ({route,navigation}) => {
    const commissionData = route.params.data
    
    

    const [state, setState] = useState({
        isLoading: false,
        mobile_banking_rate: '',
        drive_offer_rate: '',
        bank_transfer_rate: '',
        recharge_rate: '',
        bill_pay_rate: '',
       
    })
    const { isLoading, mobile_banking_rate, drive_offer_rate,bank_transfer_rate,recharge_rate,bill_pay_rate } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    

   


    const isValidData = () => {
        
        const error = editCommissionValidation({
            mobile_banking_rate, drive_offer_rate,bank_transfer_rate,recharge_rate,bill_pay_rate
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }
    const onEditCommission = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            
           
           
            updateState({ isLoading: true })
            try {
                
            const result = await editCommission(EDIT_COMMISSION,{
                mobile_banking_rate, drive_offer_rate,bank_transfer_rate,recharge_rate,bill_pay_rate
                })

                
                if(result[0]==='commission-edit-success'){

                    

        
	
showSuccess('কমিশন এডিট সাকসেস')
        updateState({ isLoading: false }) 
        navigation.navigate('Home')
                }else{
                    

                    showError(result[0])


                    updateState({ isLoading: false })

                }
              
              
                
                
                
                
            } catch (error) {
                
                showError(error)
                updateState({ isLoading: false })
            }
            

           
        }
    }

   
    return (
        <View style={styles.container}>
        
       <ScrollView>
       
       <Text style={{color:'white'}}> যদি কোন কমিশন না দিতে চাই তাহলে কমিশন হিসেবে ১ দিতে হবে।
        আর কমিশন ভ্যালু ইন্টিজারে দিতে হবে।</Text>
        
             <TextInputWithLabels
                label="মোবাইল ব্যাংকিং কমিশন"
                placeHolder={commissionData[0].rate}
                keyboardType='numeric'
                
                onChangeText={(mobile_banking_rate) => updateState({ mobile_banking_rate })}
                
            />

<TextInputWithLabels
                label="ড্রাইভ অফার কমিশন"
                keyboardType='numeric'
                placeHolder={commissionData[1].rate}
                onChangeText={(drive_offer_rate) => updateState({ drive_offer_rate })}
                
            />

<TextInputWithLabels
                label="ব্যাংক ট্রান্সফার কমিশন"
                keyboardType='numeric'
                placeHolder={commissionData[2].rate}
                onChangeText={(bank_transfer_rate) => updateState({ bank_transfer_rate })}
                
            />

<TextInputWithLabels
                label="রিচার্জ কমিশন"
                keyboardType='numeric'
                placeHolder={commissionData[3].rate}
                onChangeText={(recharge_rate) => updateState({ recharge_rate })}
                
            />

<TextInputWithLabels
                label="বিল পে কমিশন"
                keyboardType='numeric'
                placeHolder={commissionData[4].rate}
                onChangeText={(bill_pay_rate) => updateState({ bill_pay_rate })}
                
            />

<ButtonWithLoader text="কমিশন এডিট করুন" onPress={onEditCommission} isLoading={isLoading}/>
        
       </ScrollView>
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
export default EditCommission;
