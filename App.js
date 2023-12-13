import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Tests, TestDetail, AnemiForm, Name } from "./src/Pages";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tests" component={Tests} />
        <Stack.Screen name="TestDetail" component={TestDetail} />
        <Stack.Screen name="AnemiForm" component={AnemiForm} />
        <Stack.Screen name="Name" component={Name} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
