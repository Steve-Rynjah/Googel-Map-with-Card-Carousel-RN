import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainMapScreen } from "./src/screens/mainMap.screen";
import { DetailScreen } from "./src/screens/details.screen";



const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="_MAIN"
            component={MainMapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="_DETAIL"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
