import React from "react";
import AppNavigator from "./src/Navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return(
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App