//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { editBalanceValidation } from '../../utils/validations';
import { showError, showSuccess } from '../../utils/helperFunction';
import { EDIT_BALANCE } from '../../config/urls';
import { editBalance } from '../../utils/apiRequest';


// create a component
const EditBalance = ({navigation}) => {
    


    const [state, setState] = useState({
        isLoading: false,
        email: '',
        balance: '',
       
    })
    const { isLoading, email, balance } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = editBalanceValidation({
            email,
            balance
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }


    const onAddBalance = async()=>{

        const checkValid = isValidData()
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                const result = await editBalance(EDIT_BALANCE,{
                    email,
                    balance
                })

                
                if(result[0]==='edit-balance-success'){
                    showSuccess('ব্যালেন্স এডিট সফল হয়েছে।')
                    updateState({ isLoading: false })
                    navigation.navigate('Balance')

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
       
             <TextInputWithLabels
                label="ইউজার ইমেইল"
                placeHolder="ইউজারের ইমেইল টাইপ করুন"
                onChangeText={(email) => updateState({ email })}
                
            />

<TextInputWithLabels
                label="ব্যালেন্স এমাউন্ট"
                placeHolder="এমাউন্ট টাইপ করুন"
                keyboardType='numeric'
                onChangeText={(balance) => updateState({ balance })}
                
            />

<ButtonWithLoader text="ব্যালেন্স এড করুন" onPress={onAddBalance} isLoading={isLoading}/>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: '#2c3e50',
        padding:10
    },
});

//make this component available to the app
export default EditBalance;
