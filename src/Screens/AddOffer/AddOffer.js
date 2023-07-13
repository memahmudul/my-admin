//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addOfferValidation } from '../../utils/validations';
import { showError, showSuccess } from '../../utils/helperFunction';
import { addNewOffer } from '../../utils/apiRequest';
import { ADD_NEW_OFFER } from '../../config/urls';

// create a component
const AddOffer = ({navigation}) => {
    

    const operatorData = ['grameenphone','banglalink','robi','airtel','teletalk']
    const offerTypeData = ['internet','voice/minute','bundle']

    const [state, setState] = useState({
        operator: '',
        offer_type:'',
        name:'',
        validity:'',
        price:'',
        isLoading:false
    })

    const { isLoading,operator,offer_type,name,validity,price} = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = addOfferValidation({
            operator,offer_type,name,validity,price
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }



    const onAddOffer = async()=>{
        const checkValid = isValidData()
        if(checkValid){
            updateState({ isLoading: true })
            try {

                const result = await addNewOffer(ADD_NEW_OFFER,{
                    operator,offer_type,name,validity,price
                })

                if(result[0]==='add-new-offer-success'){
                    showSuccess('অফার এড সফল হয়েছে।')
                    updateState({ isLoading: false })
                    // navigation.navigate('Balance')

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

<SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15,backgroundColor:'#E31D25',borderRadius:10}}
       
        renderDropdownIcon = {
            ()=>{
                return <Icon name="angle-down"  backgroundColor="transparent" color="white" size={25}></Icon>
            }
        }
        dropdownStyle={{backgroundColor:'#E31D25',color:'white'}}
        rowTextStyle={{color:'white'}}
        defaultButtonText="Select Operator"
            data={operatorData}
            onSelect={(operator, index) => {
                updateState({ operator })
	}}

    buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}

    rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
        />


<SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15,backgroundColor:'#E31D25',borderRadius:10}}
       
        renderDropdownIcon = {
            ()=>{
                return <Icon name="angle-down"  backgroundColor="transparent" color="white" size={25}></Icon>
            }
        }
        dropdownStyle={{backgroundColor:'#E31D25',color:'white'}}
        rowTextStyle={{color:'white'}}
        defaultButtonText="Select Offer Type"
            data={offerTypeData}
            onSelect={(offer_type, index) => {
                updateState({ offer_type })
	}}

    buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}

    rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
        />

<TextInputWithLabels
                label="অফার নেম"
                placeHolder="অফার নেম টাইপ করুন"
                
                onChangeText={(name) => updateState({ name })}
                
            />

<TextInputWithLabels
                label="অফার ভ্যালিডিটি"
                placeHolder="অফার ভ্যালিডিটি টাইপ করুন"
                
                onChangeText={(validity) => updateState({ validity })}
                
            />

<TextInputWithLabels
                label="অফার প্রাইস"
                placeHolder="অফার প্রাইস টাইপ করুন"
                keyboardType='numeric'
                
                onChangeText={(price) => updateState({ price })}
                
            />

            

        
          

<ButtonWithLoader text="অফার এড করুন" onPress={onAddOffer} isLoading={isLoading}/>
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
export default AddOffer;
