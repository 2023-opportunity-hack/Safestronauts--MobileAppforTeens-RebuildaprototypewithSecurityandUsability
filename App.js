import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginVerification from './LoginVerification';
import MainScreen from './MainScreen';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page5 from './Page5';
import Page6 from './Page6';
import Safety_plan from './Safety_plan';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginVer">
        <Stack.Screen name="LoginVer" component={LoginVerification} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Safety_plan" component={Safety_plan} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
