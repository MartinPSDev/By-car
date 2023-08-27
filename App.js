import React from "react";
import { StatusBar } from "expo-status-bar";
import DestinationSearch from "./src/screens/DestinationSearch";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch/>
    </>
  );
};

export default App;
