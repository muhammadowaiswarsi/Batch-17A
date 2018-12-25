import React, { Component } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

import{createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/home'
import Contact from './src/contact'

const AppRoutes = createStackNavigator({
  Home:Home,
  Contact:Contact,
},{headerMode="none"})

const AppContainer = createAppContainer(AppRoutes)
 
class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}


export default App
