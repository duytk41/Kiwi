import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import Normal from '../../../customs/List/Normal';
import Toggle from '../../../customs/List/Toggle';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackParamsEnum, AccountStackParamsList } from '../../navigation/ParamList/AccountStackParams';


type AccountSettingNavigationProp = StackNavigationProp<AccountStackParamsList>;


const AccountSetting = () => {
  const navigation = useNavigation<AccountSettingNavigationProp>();
  const Dash = () => {
    return (
      <View
        style={[
          {width: '100%', backgroundColor: Colors.semiWhite, height: 1},
        ]}></View>
    );
  };
  return (
    <View style={[styles.container1]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <Text style={[font.h2Title, {color: Colors.Main}]}>Account Setting</Text>
      <Text
        style={[font.body, {width: 280, color: Colors.Main, marginTop: 20}]}>
        Update your settings like notifications, payments, profile edit etc.
      </Text>

      <ScrollView style={[{marginTop: 24}]} showsVerticalScrollIndicator={false}>
        <View>

        <Normal
            header="Your Restaurant"
            subline="Change your restaurant's information"
            onPress={() =>{
              navigation.navigate(AccountStackParamsEnum.CreateRestaurant);
            }}
          />
        <Normal
            header="Your Menu"
            subline="Change your Menu"
            onPress={() =>{
              navigation.navigate(AccountStackParamsEnum.CreateMenu);
            }}
          />

          <Normal
            header="Profile Information"
            subline="Change your account information"
          />

          <Dash />

          <Normal
            icon={require('../../../../assets/icon/24/lock.png')}
            header="Change Password"
            subline="Change your password"
          />

          <Dash />

          <Normal
            icon={require('../../../../assets/icon/24/card.png')}
            header="Payment Methods"
            subline="Add your credit & debit cards"
          />

          <Dash />

          <Normal
            icon={require('../../../../assets/icon/24/marker.png')}
            header="Locations"
            subline="Add or remove your delivery locations"
          />

          <Dash />

          <Normal
            icon={require('../../../../assets/icon/24/facebook.png')}
            header="Add Social Accounts"
            subline="Add Facebook, Twitter etc "
          />

          <Dash />

          <Normal
            icon={require('../../../../assets/icon/24/share.png')}
            header="Refer to Friends"
            subline="Get $10 for reffering friends"
          />
        </View>

        <View style={[{marginVertical: 28}]}>
          <Text style={[font.subline, {fontWeight: '600', marginBottom: 12}]}>
            Notifications
          </Text>
          <Toggle header='Push Notifications' subline='For daily update you will get it'/>
          <Dash />
          <Toggle header='SMS Notifications' subline='For daily update you will get it'/>
          <Dash />
          <Toggle header='Promotional Notifications' subline='For daily update you will get it'/>
        </View>

        <View style={[{marginBottom: 28}]}>
          <Text style={[font.subline, {fontWeight: '600', marginBottom: 12}]}>
            More
          </Text>
          <Normal
          tint={Colors.active}
            icon={require('../../../../assets/icon/24/rating.png')}
            header="Rate Us"
            subline="Rate us playstore, appstor"
          />

          <Dash />

          <Normal
            icon={require('../../../../assets/icon/24/document.png')}
            header="FAQs"
            subline="Frequently asked questions"
          />
        </View>

        <Normal
        style={{marginBottom: 28}}
            icon={require('../../../../assets/icon/24/logout.png')}
            header="Logout"
            hideSubline
          />
      </ScrollView>
    </View>
  );
};

export default AccountSetting;
