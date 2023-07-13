//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { addNotificationValidation } from '../../utils/validations';
import { showError, showSuccess } from '../../utils/helperFunction';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { addNewNotification } from '../../utils/apiRequest';
import { ADD_NEW_NOTIFICATION } from '../../config/urls';

// create a component
const AddNotification = ({navigation}) => {

    

    const [state, setState] = useState({
        title: '',
        
        message:'',
        
        isLoading:false
    })

    const { isLoading,title,message} = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = addNotificationValidation({
            title,message
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }


    const onAddNotification = async()=>{
        const checkValid = isValidData()
        if(checkValid){
            updateState({ isLoading: true })

            try {
                const result = await addNewNotification(ADD_NEW_NOTIFICATION,{
                    title,message
                })

                if(result[0]==='add-new-notification-success'){
                    showSuccess('নোটিফিকেশন এড সফল হয়েছে।')
                    updateState({ isLoading: false })
                    
                    navigation.navigate('Notifications')

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
                label="Title"
                placeHolder="type notification title "
              
                
                onChangeText={(title) => updateState({ title })}
                
            />

<TextInputWithLabels
                label="Message"
                placeHolder="type notification message "
              
                
                onChangeText={(message) => updateState({ message })}
                
            />

            

        
          

<ButtonWithLoader text="Add Notification" onPress={onAddNotification} isLoading={isLoading}/>
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
export default AddNotification;
