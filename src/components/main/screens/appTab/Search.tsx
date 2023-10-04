import {View, Text, StatusBar, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import TopBar from '../../../customs/Others/TopBar';
import Grid1 from '../../../customs/Grid/Grid1';
import Grid2 from '../../../customs/Grid/Grid2';
import Form1 from '../../../customs/Form/Form1';
import Form2 from '../../../customs/Form/Form2';
import Medium from '../../../customs/Card/Medium';
import Form4 from '../../../customs/Form/Form4';

const Search = () => {
  const TopRestaurants = [
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
    <View style={styles.container1}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <Text style={[font.h2Title, {color: 'black', fontWeight: '700'}]}>
        Search
      </Text>

      <Form4
        icon={require('../../../../assets/icon/24/search.png')}
        style={{borderColor: 'black', borderWidth: 1, marginVertical: 20}}
        placeholder='Search for restaurants or dishes'
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        style={styles.container}>
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
            {TopRestaurants.map((item, index) => {
              return index % 2 === 0 ? (
                <View style={styles.columnContainer} key={index}>
                  <Grid1 {...item} />
                </View>
              ) : null;
            })}
          </View>

          <View>
            {TopRestaurants.map((item, index) => {
              return index % 2 === 0 ? (
                <View style={styles.columnContainer} key={index}>
                  {index + 1 < TopRestaurants.length && (
                    <Grid1 {...TopRestaurants[index + 1]} />
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

export default Search;
