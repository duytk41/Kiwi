import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParamList } from './RootNavigation';
import Splash from '../screens/inforStack/Log/Splash';
import Wk from '../screens/inforStack/Log/Wk';
import Signin from '../screens/inforStack/Log/Signin';
import Signup from '../screens/inforStack/Log/Signup';
import Phone from '../screens/inforStack/Log/Phone';
import ConfirmPhone from '../screens/inforStack/Log/ConfirmPhone';

const Stack = createNativeStackNavigator<ParamList>();
const UserNavigation = () => {
  return <Stack.Navigator initialRouteName="Splash">
    {UserStack.map((item : any, index: number) => (
        <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={item.options}
        />
        ))}
  </Stack.Navigator>;
};

export default UserNavigation

const UserStack : any =[
  {
    name: 'Splash',
    component: Splash,
    options: {headerShown: false},
  },
  {
    name: 'Wk',
    component: Wk,
    options: {headerShown: false},
  },
  {
    name: 'Signin',
    component: Signin,
    options: {headerShown: false},
  },
  {
    name: 'Signup',
    component: Signup,
    options: {headerShown: false},
  },
  {
    name: 'Phone',
    component: Phone,
    options: {headerShown: false},
  },
  {
    name: 'ConfirmPhone',
    component: ConfirmPhone,
    options: {headerShown: false},
  }
]