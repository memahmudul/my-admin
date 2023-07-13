//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { signupValidation } from '../utils/validations';
import { showError, showSuccess } from '../utils/helperFunction';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../components/ButtonWithLoader';
import TextInputWithLabels from '../components/TextInputWithLabel';
import { useDispatch } from 'react-redux';
import { adminSignup } from '../reduxtooolkit/authSlice';
import { signup } from '../utils/apiRequest';
import { SIGNUP } from '../config/urls';

// create a component
const Signup = () => {
   

    const dispatch = useDispatch()

    const [state, setState] = useState({
        name:'',
        isLoading: false,
        email: '',
        password:'',
        confirmPassword:'',
        isSecure: true,
        status:'pending'
    })

    const updateState = (data) => setState(() => ({ ...state, ...data }))
    const {  name,email,password,confirmPassword,status, isSecure,isLoading } = state


    const isValidData = () => {
        const error = signupValidation({
            name,
            email,
            password,
            confirmPassword,
            status,
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onSignUp = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            updateState({ isLoading: true })
           try {
            const result = await signup(SIGNUP,{name,
                email,
                password,
                status,})

                

             


            if(result==='signup-success'){
                updateState({ isLoading: false })
                showSuccess('Successfully signed up')
                // navigation.navigate('Login')
            }else{
                showError(result)
                updateState({ isLoading: false })
            }
                
            
           } catch (error) {
            showError(error.message)
            updateState({ isLoading: false })
            
           }
        }
    }

    return (
        <View style={styles.container}>
        <SafeAreaView>
        <TextInputWithLabels
            label="নাম"
            placeHolder="আপনার নাম দিন"
            isSecure={isSecure}
            onChangeText={(name) => updateState({ name })}
           
            
        />
        <TextInputWithLabels
            label="ইমেইল"
            placeHolder="আপনার ইমেইল দিন"
            isSecure={isSecure}
            onChangeText={(email) => updateState({ email })}
           
            
        />
        <TextInputWithLabels
            label="পাসওয়ার্ড"
            placeHolder="আপনার পাসওয়ার্ড দিন"
            isSecure={isSecure}
            onChangeText={(password) => updateState({ password })}
           
            
        />
        <TextInputWithLabels
            label="কনফার্ম পাসওয়ার্ড"
            placeHolder="পাসওয়ার্ড নিশ্চিত করুন"
            isSecure={isSecure}
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
           
            
        />


         <ButtonWithLoader text="সাইন আপ করুন" isLoading={isLoading} onPress={onSignUp}/>
        </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white',
        
       
    },
});

//make this component available to the app
export default Signup;
