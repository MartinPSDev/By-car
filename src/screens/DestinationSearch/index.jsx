import React, { useEffect } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import styles from "./styles.js";
import { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState ('');
    const [destinationPlace, setDestinationPlace] = useState ('');

    useEffect ( ()=>{
      if (originPlace && destinationPlace) {
        console.warn ('Redirect to results');
      }

    },[originPlace,destinationPlace]);

     return (
    <SafeAreaView style= {{flex:1}}>
      <View style={styles.container}>

      <GooglePlacesAutocomplete
           placeholder='Where from?'
           onPress= {(data, details = null) =>{
            setOriginPlace ({data,details});
             console.log(data, details);
           }}
           styles={{
            textInput: styles.textInput,
           }}
           fetchDetails
           query={{
            key: 'AIzaSyD78grWCPuEZDBy3_WaP0VT5buwFBJY3Kg',
            lenguage: 'es',
           }}
           />
       
         <GooglePlacesAutocomplete
           placeholder='Where to?'
           onPress= {(data, details = null) =>{
            setDestinationPlace ( {data,details});
             console.log(data, details);
           }}
           styles={{
            textInput: styles.textInput,
           }}
           fetchDetails
           query={{
            key: 'AIzaSyD78grWCPuEZDBy3_WaP0VT5buwFBJY3Kg',
            lenguage: 'es',
           }}
           />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
