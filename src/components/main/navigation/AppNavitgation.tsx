import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, styles} from '../../customs/Styles';
import Home from '../screens/appTab/Home';
import Search from '../screens/appTab/Search';
import Orders from '../screens/appTab/Orders';
import AccountSetting from '../screens/appTab/AccountSetting';
import ActiveTab from '../../customs/Others/ActiveTab';
import AccountStackNavigation from './AccountStackNavigation';
import RateList from '../../../test/RateList';

const AppNavitgation = () => {
  const Tab = createBottomTabNavigator();
  const BottomTab = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: Colors.active,
          tabBarInactiveTintColor: '#BDBDBD',
          headerShown: false,
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <Image
                    source={require('../../../assets/icon/24/food.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? Colors.active : Colors.gray,
                    }}
                  />
                  {focused ==true ? <ActiveTab/>: null}
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <><Image
                  source={require('../../../assets/icon/24/search.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? Colors.active : Colors.gray,
                  }}
                />
                {focused ==true ? <ActiveTab/>: null}
                </>
              );
            },
          }}
        />
        {/* <Tab.Screen
          name="Love"
          component={RateList}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <><Image
                  source={require('../../../assets/icon/24/heart.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? Colors.active : Colors.gray,
                  }}
                />
                {focused ==true ? <ActiveTab/>: null}
                </>
              );
            },
          }}
        /> */}
        <Tab.Screen
          name="Order"
          component={Orders}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <><Image
                  source={require('../../../assets/icon/24/order.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? Colors.active : Colors.gray,
                  }}
                />
                {focused ==true ? <ActiveTab/>: null}
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="User"
          component={AccountSetting}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <><Image
                  source={require('../../../assets/icon/24/profile.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? Colors.active : Colors.gray,
                  }}
                />
                {focused ==true ? <ActiveTab/>: null}
                </>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
};

export default AppNavitgation;
