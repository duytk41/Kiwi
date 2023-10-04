import { View, Text, ScrollView, StatusBar, FlatList } from 'react-native';
import React from 'react';
import { styles, font, Colors, components } from '../../../customs/Styles';
import TopBar from '../../../customs/Others/TopBar';
import Big from '../../../customs/Card/Big';
import Banner from '../../../customs/Others/Banner';
import Medium from '../../../customs/Card/Medium';

const Home = () => {
  const Restaurants = [
    {
      name: 'Sushi Delight',
      address: '789 Oak Street, San Francisco, CA',
      time: '25 mins',
      deliverFee: '$2.00',
      rate: 4.8,
      image: require('../../../../assets/img/sushiDelight.jpg'),
    },
    {
      name: 'Italian Bistro',
      address: '123 Pine Avenue, San Francisco, CA',
      time: '32 mins',
      deliverFee: '$3.00',
      rate: 4.5,
      image: require('../../../../assets/img/italianBistro.png'),
    },
    {
      name: 'Mexican Cantina',
      address: '456 Elm Street, San Francisco, CA',
      time: '21 mins',
      deliverFee: '$4.50',
      rate: 4.2,
      image: require('../../../../assets/img/mexicanCantina.png'),
    },
    {
      name: 'Chinese Garden',
      address: '789 Maple Avenue, San Francisco, CA',
      time: '50 mins',
      deliverFee: '$2.50',
      rate: 4.4,
      image: require('../../../../assets/img/chineseGarden.png'),
    },
    {
      name: 'Thai Spice',
      address: '555 Pine Street, San Francisco, CA',
      time: '13 mins',
      deliverFee: '$3.50',
      rate: 4.7,
      image: require('../../../../assets/img/thaiSpice.jpg'),
    },
  ];

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
    <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <TopBar hasHeader header="Deliver to" name="San Francisco" right />
      <View style={[styles.container1, { alignItems: 'center' }]}>
        <Big
          bannerOnly
          image={[
            require('../../../../assets/img/mcDonald.png'),
            require('../../../../assets/img/soup.png'),
            require('../../../../assets/img/mcDonald.png'),
            require('../../../../assets/img/soup.png'),
            require('../../../../assets/img/mcDonald.png'),
          ]}
        />
        <View
          style={[
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              marginTop: 34,
              marginBottom: 20,
            },
          ]}>
          <Text style={[font.h3Title, { color: Colors.Main, width: 220 }]}>
            Featured Partners
          </Text>
          <Text style={[font.body, { color: Colors.active }]}>see all</Text>
        </View>

        <FlatList
          data={Restaurants}
          ItemSeparatorComponent={() => {
            return <View style={{ width: 20 }} />;
          }}
          renderItem={({ item }) => (
            <Medium
              name={item.name}
              image={item.image}
              address={item.address}
              deliverFee={item.deliverFee}
              rate={item.rate}
              time={item.time}
            />
          )}
          keyExtractor={(item, index) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Banner style={[{ width: '100%', marginVertical: 34 }]} />

        <View
          style={[
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              marginBottom: 20,
            },
          ]}>
          <Text style={[font.h3Title, { color: Colors.Main, width: 225 }]}>
            Best Picks Restaurants by team
          </Text>
          <Text style={[font.body, { color: Colors.active }]}>see all</Text>
        </View>

        <FlatList
          data={Restaurants}
          ItemSeparatorComponent={() => {
            return <View style={{ width: 20 }} />;
          }}
          renderItem={({ item }) => (
            <Medium
              name={item.name}
              image={item.image}
              address={item.address}
              deliverFee={item.deliverFee}
              rate={item.rate}
              time={item.time}
            />
          )}
          keyExtractor={(item, index) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View
          style={[
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              marginTop: 34,
              marginBottom: 20,
            },
          ]}>
          <Text style={[font.h3Title, { color: Colors.Main, width: 225 }]}>
            All Restaurants
          </Text>
          <Text style={[font.body, { color: Colors.active }]}>see all</Text>
        </View>

        {AllRestaurants.map((item, index) => (
          <Big key={index} {...item} style={{ marginBottom: 20 }} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
