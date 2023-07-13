//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../components/ButtonWithLoader';
import TextInputWithLabels from '../components/TextInputWithLabel';
import { showError,showSuccess } from '../utils/helperFunction';
import { login } from '../utils/apiRequest';
import { setAdminData } from '../utils/asyncStorage';
import { increment, saveAdminData } from '../reduxtooolkit/authSlice';
import { loginValidation } from '../utils/validations';
import { LOGIN } from '../config/urls';
import { useSelector, useDispatch } from 'react-redux'


// create a component
const Login = ({ navigation }) => {

    const dispatch = useDispatch()
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))
   


    const isValidData = () => {
        const error = loginValidation({
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }
    const onLogin = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            
           
           
            updateState({ isLoading: true })
            try {
                
            const login_result = await login(LOGIN,{
                    email,
                    password
                })

                
                if(login_result[0]==='login-success'){

                    
                   
                    
                  
                    
                 
                    
       
        setAdminData(login_result[1])  //to add admin data to async storage
        
     
       dispatch( saveAdminData(login_result[1])) //to update state so that everything gets rendered

       showSuccess(login_result[1].admin.name)
		
        
	
    //     showSuccess('লগইন সাকসেস')
        updateState({ isLoading: false }) 
                }else{
                    

                    showError(login_result[0])


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
            <SafeAreaView>
            <TextInputWithLabels
                label="ইমেইল"
                placeHolder="আপনার ইমেইল টাইপ করুন"
                onChangeText={(email) => updateState({ email })}
                
            />
            <TextInputWithLabels
                label="পাসওয়ার্ড"
                placeHolder="আপনার পাসওয়ার্ড টাইপ করুন"
                isSecure={isSecure}
                onChangeText={(password) => updateState({ password })}
               
                
            />
            <ButtonWithLoader text="লগইন করুন" onPress={onLogin} isLoading={isLoading}/>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:10}}>
      <Text style={{fontSize:16}}>No Account?  </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')}><Text style={{fontSize:16,color:'#EE2424'}}>Sign Up Here</Text></TouchableOpacity>
      </View>
            
            
              
            
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    },
});

//make this component available to the app
export default Login;
