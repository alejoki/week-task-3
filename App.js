import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import NavigationBar from "./components/NavigationBar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <NavigationBar {...props} />,
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home Screen" }}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ title: "Second Screen" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
