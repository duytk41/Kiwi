import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserNavigation from './UserNavigation';
import AppNavitgation from './AppNavitgation';
import AccountStackNavigation from './AccountStackNavigation';


const Stack = createNativeStackNavigator();

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

}

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName='AppNavitgation'
      screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='AppNavigation' component={AppNavitgation}/> */}
        <Stack.Screen name='UserNavigation' component={UserNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootNavigation

