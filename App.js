

import React from 'react';

import Main from './screens/Main';
import Result from './screens/Result';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>

        <App />

    </NavigationContainer>
  )
}
