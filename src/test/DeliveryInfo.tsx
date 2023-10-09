import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, Button, ScrollView, StatusBar, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { styles, Colors, font, components } from '../components/customs/Styles';

import Big from '../components/customs/Card/Big';
import Form1 from '../components/customs/Form/Form1';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../components/customs/Button/CommonHeader';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ChevronLeftIcon, PhotoIcon as PhotoIconOutline} from 'react-native-heroicons/outline';

const DeliveryInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container1]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <CommonHeader title='Theo dõi đơn hàng'/>

      <ScrollView
        style={{ marginHorizontal: 12 }}
        showsVerticalScrollIndicator={false}>
        <Big
          bannerOnly
          image={[
            require('../assets/img/mcDonald.png'),
            require('../assets/img/soup.png'),
            require('../assets/img/mcDonald.png'),
            require('../assets/img/soup.png'),
            require('../assets/img/mcDonald.png'),
          ]}
          />
            <Text style={[font.h3Title, {marginTop: 10}]}>Đang Chuẩn bị đơn</Text>
            <Text style={[font.subhead, {marginTop: 10}]}>Địa chỉ: 123, Hồ Văn Huê, Phú Nhuận</Text>
            <Text style={[font.subhead, {marginTop: 10}]}>Chưa nhận</Text>
      </ScrollView>
    </View>
  );
};

export default DeliveryInfo;