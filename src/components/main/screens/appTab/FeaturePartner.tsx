import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import Big from '../../../customs/Card/Big';
import TopBar from '../../../customs/Others/TopBar';

const FeaturePartner = () => {
  const AllRestaurants = [
    {
      name: "McDonald's",
      image: [
        require('../../../../assets/img/mcDonald.png'),
        require('../../../../assets/img/mcDonald2.png'),
      ],
      tag: ['Bakery', 'Cafe'],
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
    {
      name: 'Tartine Bakery',
      image: [
        require('../../../../assets/img/mcDonald.png'),
        require('../../../../assets/img/mcDonald2.png'),
      ],
      tag: ['Bakery', 'Cafe'],
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
    {
      name: 'NOPA',
      image: [
        require('../../../../assets/img/mcDonald.png'),
        require('../../../../assets/img/mcDonald2.png'),
      ],
      tag: ['American', 'Brunch'],
      deliveryFee: '$6.99',
      bannerOnly: false,
      rate: 4.6,
      rateAmounts: 250,
      time: '40-55 min',
    },
    {
      name: 'Hog Island Oyster Co.',
      image: [
        require('../../../../assets/img/mcDonald.png'),
        require('../../../../assets/img/mcDonald2.png'),
      ],
      tag: ['Seafood', 'Oysters'],
      deliveryFee: '$7.99',
      bannerOnly: true,
      rate: 4.4,
      rateAmounts: 200,
      time: '35-50 min',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar name="Feature Partner" left />
      <ScrollView style={styles.container}>
        <View style={[styles.container1]}>
          {AllRestaurants.map((item, index) => (
            <Big tint={Colors.active} key={index} {...item} style={{marginBottom: 20}} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturePartner;
