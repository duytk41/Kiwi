import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import AccountSetting from '../../screens/appTab/AccountSetting';
import CreateRestaurant from '../../../../test/CreateRestaurant';
import CreateMenu from '../../../../test/CreateMenu';


export enum AccountStackParamsEnum {
  AccountSetting = "AccountSetting",
  CreateRestaurant = "CreateRestaurant",
  CreateMenu = "CreateMenu"
}

export type AccountStackParamsList = {
  AccountSetting: undefined
  CreateRestaurant: undefined
  CreateMenu: undefined
};

export const AccountStackScreens = () => {
  const Screens: any[] = [
    {
      id: 1, name: AccountStackParamsEnum.AccountSetting,
      component: AccountSetting, option: {}
    }, {
      id: 2, name: AccountStackParamsEnum.CreateRestaurant,
      component: CreateRestaurant, option: {}
    }, {
      id: 3, name: AccountStackParamsEnum.CreateMenu,
      component: CreateMenu, option: {}
    }

  ];

  return Screens;
}
