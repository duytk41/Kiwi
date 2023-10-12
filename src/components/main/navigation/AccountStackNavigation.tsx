import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import AccountSetting from '../screens/appTab/AccountSetting';
import CreateMenu from '../../../test/CreateMenu';
import CreateRestaurant from '../../../test/CreateRestaurant';
import { AccountStackScreens } from './ParamList/AccountStackParams';

const Stack = createStackNavigator();

const AccountStackNavigation = () => {
  return (

      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          AccountStackScreens().map((item, index) =>
            <Stack.Screen key={index} name={item.name}
              component={item.component} options={item.option} />
          )
        }
      </Stack.Navigator>

  )
}

export default AccountStackNavigation


