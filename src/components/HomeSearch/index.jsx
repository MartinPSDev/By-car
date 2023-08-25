import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.js";
import { SimpleLineIcons } from "@expo/vector-icons";

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To? </Text>
      </View>
      <>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <SimpleLineIcons name="clock" size={24} color="black" />
          </View>
        </View>
      </>
    </View>
  );
};

export default HomeSearch;
