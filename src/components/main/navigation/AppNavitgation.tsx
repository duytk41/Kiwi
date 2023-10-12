import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, styles } from '../../customs/Styles';
import Home from '../screens/appTab/Home';
import Search from '../screens/appTab/Search';
import Orders from '../screens/appTab/Orders';
import AccountSetting from '../screens/appTab/AccountSetting';
import ActiveTab from '../../customs/Others/ActiveTab';
import AccountStackNavigation from './AccountStackNavigation';

const Tab = createBottomTabNavigator();

const AppNavitgation = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: '#BDBDBD',
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../../../assets/icon/24/food.png')
              : require('../../../assets/icon/24/food.png');
          } else if (route.name === 'Search') {
            iconName = focused
              ? require('../../../assets/icon/24/search.png')
              : require('../../../assets/icon/24/search.png');
          } else if (route.name === 'Order') {
            iconName = focused
              ? require('../../../assets/icon/24/order.png')
              : require('../../../assets/icon/24/order.png');
          } else if (route.name === 'User') {
            iconName = focused
              ? require('../../../assets/icon/24/profile.png')
              : require('../../../assets/icon/24/profile.png');
          }
          return (
            <Image
              source={iconName}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? Colors.active : Colors.gray,
              }}
            />
          );
        },
      })}>

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Order" component={Orders} />
      <Tab.Screen name="User" component={AccountStackNavigation} />

    </Tab.Navigator>

  );
};

export default AppNavitgation;
