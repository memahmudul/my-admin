//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonWithLoader from '../components/ButtonWithLoader';
import { clearReduxAdminData } from '../reduxtooolkit/authSlice';
import { clearAdminData, getAdminData } from '../utils/asyncStorage';
import { useDispatch, useSelector } from 'react-redux';
import DashboardCard from './components/DashboardCard';


// create a component
const Home = ({navigation}) => {

    const dispatch = useDispatch()
    const adminName = useSelector((state)=> state.auth.admin.admin.name)
    
    


    const navigateToMobileBanking = ()=>{
        
        navigation.navigate('MobileBanking')

      }

      const navigateToFlexiLoad = ()=>{
        
        navigation.navigate('FlexiLoad')

      }

      const navigateToDriveOffer = ()=>{
        
        navigation.navigate('DriveOffer')

      }


      const navigateToBankTransfer = ()=>{
        
        navigation.navigate('BankTransfer')

      }

      const navigateToBillPay = ()=>{
        
        navigation.navigate('BillPay')

      }

      const navigateToCommission = ()=>{
        navigation.navigate('Commission')

      }

      const navigateToSlider = ()=>{
        navigation.navigate('Slider')

      }

      const navigateToBalance = ()=>{
        
        navigation.navigate('Balance')

      }

      const navigateToEditPayment = ()=>{
        
        navigation.navigate('EditPayment')

      }
      
      const navigateToUsers = ()=>{
        
        navigation.navigate('Users')

      }


      const navigateToAddOffer = ()=>{
        
        navigation.navigate('AddOfferMain')

      }


      const navigateToNotification = ()=>{
        
        navigation.navigate('Notifications')

      }






  

    const onLogout = async()=>{
        await clearAdminData()
        dispatch(clearReduxAdminData())
    }
    return (
        <View style={styles.container}>


          

        <View style={styles.cardShadow}>
        <View style={styles.cardContainer}>
        <Text style={{fontSize:18,color:'black'}}>Manage Section</Text>
        <View style={styles.wrapper}>


        
        
        <DashboardCard  onPress={navigateToUsers} text="Manage Users"/>

       {
        adminName==='admin1' ?  <DashboardCard  onPress={navigateToNotification} text="Manage Notifications"/> : ''
       }


       {
        adminName==='admin1' ?  <DashboardCard  onPress={navigateToSlider} text="Manage Slider"/> : ''
       }

       {
        adminName==='admin1' ?   <DashboardCard  onPress={navigateToCommission} text="Manage Commission"/> : ''
       }

        

       
        <DashboardCard  onPress={navigateToBalance} text="Manage Balance"/>
        <DashboardCard  onPress={navigateToEditPayment} text="Manage Payment"/>

        {
        adminName==='admin1' ?   <DashboardCard  onPress={navigateToAddOffer} text="Manage Offer"/> : ''
       }

        

        </View>

        </View>

        </View>



























        <View style={styles.cardShadow}>
        <View style={styles.cardContainer}>
        <Text style={{fontSize:18,color:'black'}}>Order Section</Text>
        <View style={styles.wrapper}>
        
        <DashboardCard  onPress={navigateToMobileBanking} text="Mobile Banking"/>



        <DashboardCard  onPress={navigateToFlexiLoad} text="Flexiload"/>






        <DashboardCard  onPress={navigateToDriveOffer} text="Drive Offer"/>

        <DashboardCard  onPress={navigateToBillPay} text="Bill Pay"/>

        <DashboardCard  onPress={navigateToBankTransfer} text="Bank Transfer"/>

        </View>

        </View>

        </View>

























        
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: 'white',
        flexDirection: 'column',
       
        gap:10,
       
       
    },



    cardShadow: {
       
        borderRadius: 10,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
       },
       cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:10
       },


       wrapper:{
        
        
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:10,
        flexWrap:'wrap'

       }
});

//make this component available to the app
export default Home;
