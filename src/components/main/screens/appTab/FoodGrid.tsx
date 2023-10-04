import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import TopBar from '../../../customs/Others/TopBar';
import Grid1 from '../../../customs/Grid/Grid1';
import Grid2 from '../../../customs/Grid/Grid2';

const FoodGrid = () => {
  const AllRestaurants = [
    {
      name: "McDonald's",
      image: require('../../../../assets/img/mcDonald.png'),
      type1: 'Chinese',
      type2: 'America',
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
    {
      name: "bill's",
      image: require('../../../../assets/img/mcDonald.png'),
      type1: 'Chinese',
      type2: 'America',
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
    {
      name: "ANa's",
      image: require('../../../../assets/img/mcDonald.png'),
      type1: 'Chinese',
      type2: 'America',
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
    {
      name: "T's",
      image: require('../../../../assets/img/mcDonald.png'),
      type1: 'Chinese',
      type2: 'America',
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
    {
      name: "V's",
      image: require('../../../../assets/img/mcDonald.png'),
      type1: 'Chinese',
      type2: 'America',
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
    {
      name: "B's",
      image: require('../../../../assets/img/mcDonald.png'),
      type1: 'Chinese',
      type2: 'America',
      deliveryFee: '$4.99',
      bannerOnly: false,
      rate: 4.8,
      rateAmounts: 500,
      time: '30-45 min',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar name="Food" left right />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View
          style={[
            {marginTop: 24, paddingHorizontal: 20},
            {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 20,
            },
          ]}>
          <View>
            {AllRestaurants.map((item, index) => {
              return index % 2 === 0 ? (
                <View style={styles.columnContainer} key={index}>
                  <Grid2 {...item} />
                </View>
              ) : null;
            })}
          </View>

          <View>
            {AllRestaurants.map((item, index) => {
              return index % 2 === 0 ? (
                <View style={styles.columnContainer} key={index}>
                  {index + 1 < AllRestaurants.length && (
                    <Grid1 {...AllRestaurants[index + 1]} />
                  )}
                </View>
              ) : null;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodGrid;
