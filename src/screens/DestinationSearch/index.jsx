import React from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import styles from "./styles.js";
import { useState } from "react";

const DestinationSearch = () => {
    const [fromText,setFromText] = useState('');
    const [destinationText, setDestinationText] = useState ('');    
        return (
    <SafeAreaView style= {{flex:1}}>
      <View style={styles.container}>
        <TextInput
         value={fromText}
         onTextChange={setFromText}
         style={styles.textInput}
         placeholder="From" />
        <TextInput 
         value={destinationText}
         onTextChange={setDestinationText}
         style={styles.textInput}
         placeholder="Where to?" />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
