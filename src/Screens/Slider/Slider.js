//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { editSliderValidation } from '../../utils/validations';
import { EDIT_SLIDER } from '../../config/urls';
import { editSlider } from '../../utils/apiRequest';
import { showError, showSuccess } from '../../utils/helperFunction';

// create a component
const Slider = ({navigation}) => {
   

     
    const [state, setState] = useState({
        isLoading: false,
        image_1: '',
      image_2: '',
      image_3:''
       
    })
    const { isLoading, image_1,image_2, image_3 } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        
        const error = editSliderValidation({
            image_1,image_2,image_3
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }
    const onEditSlider = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            
           
           
            updateState({ isLoading: true })
            try {
                const image_array = [image_1,image_2,image_3]
                
            const result = await editSlider(EDIT_SLIDER,{
                image_array
                })

                
                if(result[0]==='slider-edit-success'){

                    

        
	
showSuccess('স্লাইডার এডিট সাকসেস')
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
         <Text>স্লাইডার ইমেজ গুগল ড্রাইভে আপলোড দিয়ে গুগল ড্রাইভের লিংক দিলেই হবে। একসাথে ৩টি স্লাইডার ই এডিট করতে হবে</Text>
            <TextInputWithLabels
                label="১ম স্লাইডার ইমেজ"
                placeHolder="১ম ইমেজ লিংক টাইপ করুন"
                onChangeText={(image_1) => updateState({ image_1 })}
                
            />



<TextInputWithLabels
                label="২য় স্লাইডার ইমেজ"
                placeHolder="২য় ইমেজ লিংক টাইপ করুন"
                onChangeText={(image_2) => updateState({ image_2 })}
                
            />
            <TextInputWithLabels
                label="৩য় স্লাইডার ইমেজ"
                placeHolder="৩য় ইমেজ লিংক টাইপ করুন"
                onChangeText={(image_3) => updateState({ image_3 })}
                
            />

<ButtonWithLoader text="এডিট করুন" onPress={onEditSlider} isLoading={isLoading}/>
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
export default Slider;
