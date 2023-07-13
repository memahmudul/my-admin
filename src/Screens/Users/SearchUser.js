//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { getSingleUser } from '../../utils/apiRequest';
import { GET_SINGLE_USER } from '../../config/urls';
import { showError, showSuccess } from '../../utils/helperFunction';

// create a component
const SearchUser = () => {

   const [user,setUser] =  useState([])

    

    const [state, setState] = useState({
        isLoading: false,
        email: '',
        
       
    })
    const { isLoading, email } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))


    const onSearchUser = async()=>{
        const result=  await getSingleUser(GET_SINGLE_USER,{email})
        
       
        
        
        if(result[0]==='single-user-fetch-success'){
            
           setUser(result[1])
         
       
                
         }else{
            showError('Error Occurred')
         }  

         
        
    }


    
    return (
        <View style={styles.container}>

    

        
            <TextInputWithLabels
                label="ইউজার ইমেইল"
                placeHolder="ইমেইল টাইপ করুন"
                
                onChangeText={(email) => updateState({ email })}
                
            />

<ButtonWithLoader text="সার্চ করুন" onPress={onSearchUser} isLoading={isLoading}/>


<View style={styles.userdetails}>
<View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Name : </Text>
            <Text>{user.name}</Text>
</View>

<View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Email : </Text>
            <Text>{user.email}</Text>
</View>

<View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Phone : </Text>
            <Text>{user.phone}</Text>
</View>

<View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Pin : </Text>
            <Text>{user.pin}</Text>
            </View>

<View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Balance : </Text>
            <Text>{user.balance}</Text>
</View>
</View>



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

    userdetails:{
        paddingTop:20,
    

    }
});

//make this component available to the app
export default SearchUser;
