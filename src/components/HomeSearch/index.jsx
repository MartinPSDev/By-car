import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.js";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To? </Text>
      </View>
      <>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <SimpleLineIcons name="clock" size={20} color="black" />
          </View>
          <Text style={styles.destinationText}>Dot Baires Shopping</Text>
        </View>
      </>
      <>
        <View style={styles.row}>
          <View style={[styles.iconContainer, {backgroundColor:'#218cff'}]}>
          <Entypo name="home" size={24} color="black" />
          </View>
          <Text style={styles.destinationText}>Dot Baires Shopping</Text>
        </View>
      </>
    </View>
  );
};

export default HomeSearch;
