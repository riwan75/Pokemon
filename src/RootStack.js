import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screen/Home';

const Stack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <Stack.Navigator headerMode="none" initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
export default RootStackScreen;
