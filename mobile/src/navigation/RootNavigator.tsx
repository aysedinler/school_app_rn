import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardScreen from '../screens/DashboardScreen';
import StudentsScreen from '../screens/StudentsScreen';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
<Tab.Screen name='Dashboard' component={DashboardScreen}/>
<Tab.Screen name='Students' component={StudentsScreen}/>


        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator