import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./src/pages/welcome";
import Membersign from "./src/pages/membersign";
import result from "./src/pages/memberresult";


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome"
          component={Welcome}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MemberSignScreen"
          component={Membersign} />
        <Stack.Screen
          name="MemberResultScreen"
          component={result} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;