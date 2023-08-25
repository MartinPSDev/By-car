import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';


const App = () => { 
  return (
    < >
      <StatusBar barStyle= "dark-content"/>
      <HomeScreen/>
    </>
  );
 };

 export default App;

