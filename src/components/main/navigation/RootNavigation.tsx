import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import UserNavigation from './UserNavigation';
import AppNavitgation from './AppNavitgation';
import AccountStackNavigation from './AccountStackNavigation';


const Stack = createStackNavigator();


export enum ParamsScreenEnum {
  // Login
  Splash = 'Splash',
  Wk = 'Wk',
  Signin = 'Signin',
  Signup = 'Signup',
  Phone = 'Phone',
  ConfirmPhone = 'ConfirmPhone',

  EnterAddress = 'EnterAddress',
  ForgotPass = 'ForgotPass',
  ResetPass = 'ResetPass',

  //Tab
  Home = 'Home',
  Search = 'Search',
  Orders = 'Orders',
  AccountSetting = 'AccountSetting',

  //Navigation
  AppNavigation = 'AppNavigation',
  UserNavigation = 'UserNavigation',
  AccountStackNavigation = 'AccountStackNavigation',

}

export type ParamList = {
  // Login
  Splash: undefined;
  Wk: undefined;
  Signin: undefined;
  Signup: undefined;
  Phone: undefined;
  ConfirmPhone: undefined;

  EnterAddress: undefined;
  ForgotPass: undefined;
  ResetPass: undefined;

  //Tab
  Home: undefined;
  Search: undefined;
  Orders: undefined;
  AccountSetting: undefined;

  //Navigation
  AppNavigation: undefined;
  UserNavigation: undefined;
  AccountStackNavigation: undefined;


}

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='UserNavigation'
        // backGround 
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyle: { backgroundColor: '#000' },
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 300 } },
            close: { animation: 'timing', config: { duration: 300 } },
          },
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        >
        <Stack.Screen name='AppNavigation' component={AppNavitgation} />
        <Stack.Screen name='UserNavigation' component={UserNavigation} />
      </Stack.Navigator>
      {/* <AppNavitgation/> */}
    </NavigationContainer>
  )
}
export default RootNavigation

