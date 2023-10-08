import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen';
import Emergency from './Emergency';
import Contact_Professional from './Contact_Professional';
import Document_Abuse from './Document_Abuse';
import Page5 from './Page5';
import Page6 from './Page6';
import Abuse_Report from './Abuse_Report';
import Page8 from './Page8';
import Safety_plan from './Safety_plan';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="Contact_Professional" component={Contact_Professional} />
        <Stack.Screen name="Document_Abuse" component={Document_Abuse} />
        <Stack.Screen name="Safety_plan" component={Safety_plan} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} />
        <Stack.Screen name="Abuse_Report" component={Abuse_Report} />
        <Stack.Screen name="Page8" component={Page8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
