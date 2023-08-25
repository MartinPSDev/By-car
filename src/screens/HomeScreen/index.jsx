import React from "react";
import { View } from "react-native";
import HomeMap from "../../components/HomeMap/HomeMap";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = () => {
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <HomeMap />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
