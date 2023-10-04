import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import Tag from '../../../customs/Others/Tag';
import Mock from '../../../customs/Others/Mock';
import B3 from '../../../customs/Button/B3';
import Medium from '../../../customs/Card/Medium';
import Food from '../../../customs/List/Food';
import PagerView from 'react-native-pager-view';

const SingleRestaurant = () => {
  const data = [
    {
      name: 'Grilled Sandwich',
      address: '123 Mayfield Street, San Francisco',
      time: '30 mins',
      deliverFee: 'Free',
      rate: 4.5,
      image: require('../../../../assets/img/grilledSandwich.jpg'),
    },
    {
      name: 'French Onion Soup',
      address: '123 Mayfield Street, San Francisco',
      time: '20 mins',
      deliverFee: 'Free',
      rate: 4.2,
      image: require('../../../../assets/img/frenchOnionSoup.png'),
    },
    {
      name: 'Garlic Butter Bread',
      address: '123 Mayfield Street, San Francisco',
      time: '15 mins',
      deliverFee: 'Free',
      rate: 4.8,
      image: require('../../../../assets/img/garlicButterBread.jpg'),
    },
    {
      name: 'Fresh Mixed Salad',
      address: '123 Mayfield Street, San Francisco',
      time: '10 mins',
      deliverFee: 'Free',
      rate: 4.6,
      image: require('../../../../assets/img/freshMixedSalad.png'),
    },
    {
      name: 'Grilled Chicken Sandwich',
      address: '123 Mayfield Street, San Francisco',
      time: '25 mins',
      deliverFee: 'Free',
      rate: 4.4,
      image: require('../../../../assets/img/grilledChickenSandwich.png'),
    },
  ];

  const mostPopular = [
    {
      name: 'Cookie Sandwich',
      description: 'Shortbread, chocolate turtle cookies, and red velvet.',
      type: 'Dessert',
      money: '$5.99',
      image: require('../../../../assets/img/cookieSandwich.png'),
    },
    {
      name: 'Combo Burger',
      description: 'Combo Burger with Fries and Drink',
      type: 'Lunch',
      money: '$12.99',
      image: require('../../../../assets/img/comboBurger.png'),
    },
    {
      name: 'Combo Sandwich',
      description: 'Combo Sandwich with Fries and Drink',
      type: 'Lunch',
      money: '$12.99',
      image: require('../../../../assets/img/comboSandwich.png'),
    },
  ];

  const menu = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Wines'];

  const tags = ['American', 'Chinese', 'Deshi Food'];

  const [currentPage, setCurrentPage] = useState(0);

  const img = [
    require('../../../../assets/img/singleRestaurantEXP.png'),
    require('../../../../assets/img/grilledChickenSandwich.png'),
    require('../../../../assets/img/mcDonald.png'),
    require('../../../../assets/img/mcDonald2.png'),
    require('../../../../assets/img/mexicanCantina.png'),
  ];

  const renderIndicators = () => {
    const indicators = [];
    // const totalPages = prop?.image?.length || 0;
    const totalPages = 5;

    for (let i = 0; i < totalPages; i++) {
      const indicatorStyle =
        i === currentPage
          ? components.activeIndicator2
          : components.inactiveIndicator;
      indicators.push(
        <View
          key={i}
          style={[
            components.indicator,
            indicatorStyle,
            {marginHorizontal: 2, width: 8},
          ]}
        />,
      );
    }

    return indicators;
  };

  const handlePageScroll = (position: number) => {
    setCurrentPage(position);
  };

  const handlePageSelected = (position: number) => {
    setCurrentPage(position);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />

      {/* <ImageBackground
        source={require('../../../../assets/img/singleRestaurantEXP.png')}
        style={[
          styles.container1,
          {height: 280, backgroundColor: 'red'},
        ]}></ImageBackground> */}

      <View>
        <PagerView
          onPageScroll={event => handlePageScroll(event.nativeEvent.position)}
          onPageSelected={event =>
            handlePageSelected(event.nativeEvent.position)
          }
          style={{height: 280}}
          initialPage={0}>
          {img?.map((imageSource, index) => (
            <Image
              key={index}
              style={{width: '100%', height: '100%'}}
              source={imageSource}
              resizeMode="stretch"
            />
          ))}
        </PagerView>

        <View
          style={[
            components.indicatorContainer,
            {position: 'absolute', right: 20, top: 230},
          ]}>
          {renderIndicators()}
        </View>
      </View>

      <View style={[styles.container1]}>
        <Text style={[font.h3Title, {color: Colors.Main}]}>
          Mayfield Bakery & Cafe
        </Text>

        <View
          style={[
            {
              flexDirection: 'row',
              marginBottom: 16,
              marginTop: 14,
              alignItems: 'center',
              width: '90%',
            },
          ]}>
          <Text style={[font.body, {color: Colors.gray, fontWeight: '500'}]}>
            $$
          </Text>

          <FlatList
            horizontal
            data={tags}
            renderItem={({item}) => (
              <Tag font={[font.body]} dot={{marginHorizontal: 8}} name={item} />
            )}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={[
            {
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
            },
          ]}>
          <Text style={[font.caption, {color: Colors.Main, fontWeight: '500'}]}>
            {4.5}
          </Text>

          <Image
            style={[{tintColor: Colors.active, marginHorizontal: 5}]}
            source={require('../../../../assets/icon/24/rating.png')}
          />

          <Text style={[font.caption, {color: Colors.Main, fontWeight: '500'}]}>
            200+ Rating
          </Text>
        </View>
        <View
          style={[
            components.componentsSpace,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Mock style={[{marginRight: 20}]} />
            <Mock
              name={'Minutes'}
              value="25"
              icon={require('../../../../assets/icon/24/clock.png')}
            />
          </View>

          <B3 title="Take away" />
        </View>
      </View>

      <Text
        style={[
          font.subhead,
          styles.container1,
          {color: Colors.Main, fontSize: 20, marginTop: 10},
        ]}>
        Feature item
      </Text>

      <FlatList
        horizontal
        style={[{marginLeft: 20, marginTop: 16}]}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 14}} />}
        data={data}
        renderItem={({item}) => (
          <Medium
            address={item.address}
            image={item.image}
            name={item.name}
            rate={item.rate}
            time={item.time}
            deliverFee={item.deliverFee}
          />
        )}
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={menu}
        ItemSeparatorComponent={() => <View style={{width: 24}} />}
        style={[{marginTop: 34, marginBottom: 28, marginLeft: 20}]}
        renderItem={({item}) => (
          <Text style={[font.h3Title, {color: Colors.Main}]}>{item}</Text>
        )}
      />

      <ScrollView style={{height: 500}} nestedScrollEnabled>
        <View>
          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 20,
              },
            ]}>
            <Text style={[font.subhead, {color: Colors.Main, width: 220}]}>
              Most Populars
            </Text>
            <Text style={[font.body, {color: Colors.active}]}>see all</Text>
          </View>

          <View style={[styles.container1, {marginBottom: 24}]}>
            {mostPopular.map((item, index) => (
              <Food
                name={item.name}
                description={item.description}
                type={item.type}
                money={item.money}
                image={item.image}
                key={index}
                style={{marginBottom: 20}}
              />
            ))}
          </View>
          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 20,
              },
            ]}>
            <Text style={[font.subhead, {color: Colors.Main, width: 220}]}>
              Brearkfast
            </Text>
            <Text style={[font.body, {color: Colors.active}]}>see all</Text>
          </View>

          <View style={[styles.container1, {marginBottom: 24}]}>
            {mostPopular.map((item, index) => (
              <Food
                name={item.name}
                description={item.description}
                type={item.type}
                money={item.money}
                image={item.image}
                key={index}
                style={{marginBottom: 20}}
              />
            ))}
          </View>

          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 20,
              },
            ]}>
            <Text style={[font.subhead, {color: Colors.Main, width: 220}]}>
              Lunch
            </Text>
            <Text style={[font.body, {color: Colors.active}]}>see all</Text>
          </View>

          <View style={[styles.container1, {marginBottom: 24}]}>
            {mostPopular.map((item, index) => (
              <Food
                name={item.name}
                description={item.description}
                type={item.type}
                money={item.money}
                image={item.image}
                key={index}
                style={{marginBottom: 20}}
              />
            ))}
          </View>

          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 20,
              },
            ]}>
            <Text style={[font.subhead, {color: Colors.Main, width: 220}]}>
              Dinners
            </Text>
            <Text style={[font.body, {color: Colors.active}]}>see all</Text>
          </View>

          <View style={[styles.container1, {marginBottom: 24}]}>
            {mostPopular.map((item, index) => (
              <Food
                name={item.name}
                description={item.description}
                type={item.type}
                money={item.money}
                image={item.image}
                key={index}
                style={{marginBottom: 20}}
              />
            ))}
          </View>

          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 20,
              },
            ]}>
            <Text style={[font.subhead, {color: Colors.Main, width: 220}]}>
              Wines
            </Text>
            <Text style={[font.body, {color: Colors.active}]}>see all</Text>
          </View>

          <View style={[styles.container1, {marginBottom: 24}]}>
            {mostPopular.map((item, index) => (
              <Food
                name={item.name}
                description={item.description}
                type={item.type}
                money={item.money}
                image={item.image}
                key={index}
                style={{marginBottom: 20}}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default SingleRestaurant;
