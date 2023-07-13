//import liraries
import React from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch, useSelector } from 'react-redux';
import Signup from '../Screens/Signup'
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import MobileBanking from '../Screens/MobileBanking/MobileBanking';
import Balance from '../Screens/Balance/Balance';
import BalanceRequest from '../Screens/Balance/BalanceRequest';
import EditBalance from '../Screens/Balance/EditBalance';
import EditPayment from '../Screens/Payment/EditPayment';
import Commission from '../Screens/Commission/Commission';
import EditCommission from '../Screens/Commission/EditCommission';
import Slider from '../Screens/Slider/Slider';
import Users from '../Screens/Users/Users';
import AllUsers from '../Screens/Users/AllUsers';
import SearchUser from '../Screens/Users/SearchUser';
import FlexiLoad from '../Screens/Flexiload/Flexiload';
import BillPay from '../Screens/BillPay/BillPay';
import DriveOffer from '../Screens/DriveOffer/DriveOffer';
import BankTransfer from '../Screens/BankTransfer/BankTransfer';
import AddOffer from '../Screens/AddOffer/AddOffer';
import AddOfferMain from '../Screens/AddOffer/AddOfferMain';
import AllOffer from '../Screens/AddOffer/AllOffer';


import { clearReduxAdminData } from '../reduxtooolkit/authSlice';
import { clearAdminData } from '../utils/asyncStorage';
import Notifications from '../Screens/Notifications/Notifications';
import AddNotification from '../Screens/Notifications/AddNotification';
import AllNotification from '../Screens/Notifications/AllNotification';




const Stack = createStackNavigator();


// create a component
const Routes = () => {

     const dispatch = useDispatch()



  

    const adminData = useSelector((state)=> state.auth.admin)

    const onLogout = async()=>{

     await clearAdminData()

     dispatch(clearReduxAdminData())
     
     
    }


    
    return (
        <SafeAreaView style={{flex:1}}>
         <StatusBar
      backgroundColor= '#E31D25'
    
  />

  <NavigationContainer>
    <Stack.Navigator>
        {
            !adminData.token?(
                <Stack.Group>
        <Stack.Screen name="Login" component={Login} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',paddingRight:170}}>LOGIN</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />
        <Stack.Screen name="Signup" component={Signup} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',paddingRight:150}}>SIGN UP</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}/>
        </Stack.Group>
            ):(
                <Stack.Group>
        <Stack.Screen name="Home" component={Home} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerLeft:()=><Text style={{fontSize:20,color:'white',paddingLeft:20}}>DASHBOARD</Text> ,   
       headerStyle: {backgroundColor: '#E31D25'},

       headerRight:()=><Button title='Logout' onPress={onLogout}/> ,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="MobileBanking" component={MobileBanking} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>MOBILE BANKING MANAGEMENT</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="FlexiLoad" component={FlexiLoad} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>FLEXILOAD MANAGEMENT</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="BillPay" component={BillPay} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>BILL PAY MANAGEMENT</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="DriveOffer" component={DriveOffer} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>DRIVE OFFER MANAGEMENT</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="BankTransfer" component={BankTransfer} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>BANK TRANSFER MANAGEMENT</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="Balance" component={Balance} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>BALANCE MANAGEMENT</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="BalanceRequest" component={BalanceRequest} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>Balance Request</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="EditBalance" component={EditBalance} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>Edit Balance</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="EditPayment" component={EditPayment} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:110}}>Edit Payment Method</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="Commission" component={Commission} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:140}}>All Commission</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="EditCommission" component={EditCommission} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:140}}>Edit Commission</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="Slider" component={Slider} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:140}}>Edit Slider</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="Users" component={Users} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>Users</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="AllUsers" component={AllUsers} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>All Users</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="SearchUser" component={SearchUser} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>Search User</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="AddOffer" component={AddOffer} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>Add Offer</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="AddOfferMain" component={AddOfferMain} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>Manage Offer</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="AllOffer" component={AllOffer} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>All Offer</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="Notifications" component={Notifications} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>Notifications</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="AddNotification" component={AddNotification} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>Add Notification</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />

<Stack.Screen name="AllNotification" component={AllNotification} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:17,color:'white',paddingRight:180}}>All Notification</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />
        
        </Stack.Group>
            )
        }
    </Stack.Navigator>
  </NavigationContainer>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Routes;
