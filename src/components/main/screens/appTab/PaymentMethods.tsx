import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import TopBar from '../../../customs/Others/TopBar';
import B3 from '../../../customs/Button/B3';
import Payment from '../../../customs/List/Payment';

type Props = {
  havePayment?: boolean;
};

const PaymentMethods = (prop: Props) => {
  const cardList = [
    {
      header: 'Paypal',
      subline: 'Deafult Payment',
      logo: require('../../../../assets/icon/paypal.png'),
    },
    {
      header: 'Visa',
      subline: 'Not Deafult Payment',
      logo: require('../../../../assets/icon/visa.png'),
    },
    {
      header: 'Master Card',
      subline: 'Not Deafult Payment',
      logo: require('../../../../assets/icon/masterCard.png'),
    }
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />


      <TopBar left name="Payment Method" />

      <View
        style={[
          styles.container1,
          {display: prop?.havePayment ? 'none' : 'flex'},
        ]}>
        <Image
          style={{alignSelf: 'center', marginTop: 100}}
          source={require('../../../../assets/icon/payment.png')}
        />

        <View style={[components.center, {marginVertical: 40}]}>
          <Text style={[font.h3Title, {color: Colors.Main, marginBottom: 24}]}>
            Don`t have any card :)
          </Text>
          <Text style={[font.body, {width: 290, textAlign: 'center'}]}>
            It`s seems like you don`t add any credit or debit card. You may
            easily add card.
          </Text>
        </View>

        <B3
          title="Add credit cards"
          style={[components.center, {width: 255, alignSelf: 'center'}]}
        />
      </View>

      <View
        style={[
          {
            display: prop?.havePayment ? 'flex' : 'none',
            marginTop: 24,
            marginLeft: 20,
          },
        ]}>
        {cardList.map((item, index) => {
          return <Payment key={index} {...item} />;
        })}
      </View>
    </View>
  );
};

export default PaymentMethods;
