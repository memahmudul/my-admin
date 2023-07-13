//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppWrapper from './AppWrapper';


import { Provider } from 'react-redux';
import store from './src/reduxtooolkit/store'

// create a component
const App = () => {
    return (
        <Provider store={store}>
    
        <AppWrapper/>
       
    
        </Provider>
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
export default App;
