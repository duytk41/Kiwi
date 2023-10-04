import {View, Text, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import {styles, font, Colors, components} from '../../../../customs/Styles';
import B1 from '../../../../customs/Button/B1';
import PagerView from 'react-native-pager-view';
import {NavigationProp,useNavigation} from '@react-navigation/native';
import { ParamList } from '../../../navigation/RootNavigation';

const Wk = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const [currentPage, setCurrentPage] = useState(0);

  const NavitgateTo = (name: keyof ParamList) => {
    navigation.navigate(name);
  }
  
  const handlePageScroll = (position: number) => {
    setCurrentPage(position);
  };

  const handlePageSelected = (position: number) => {
    setCurrentPage(position);
  };

  const renderIndicators = () => {
    const indicators = [];
    const totalPages = 3;

    for (let i = 0; i < totalPages; i++) {
      const indicatorStyle =
        i === currentPage
          ? components.activeIndicator1
          : components.inactiveIndicator;
      indicators.push(
        <View key={i} style={[components.indicator, indicatorStyle]} />,
      );
    }

    return indicators;
  };

  return (
    <View style={[styles.container, {paddingBottom: 10}]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <PagerView
        onPageScroll={event => handlePageScroll(event.nativeEvent.position)}
        onPageSelected={event => handlePageSelected(event.nativeEvent.position)}
        style={{flex: 1, marginBottom: 40}}
        initialPage={0}>
        <View key="1">
          <Image
          resizeMode='contain'
            source={require('../../../../../assets/img/wk1.png')}
            style={{width: '100%', marginTop: 40}}
          />

          <View
            style={[
              {
                width: 'auto',
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
              },
            ]}>
            <Text
              style={[
                font.headline,
                {
                  color: Colors.Main,
                  textAlign: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                },
              ]}>
              All your favorites
            </Text>

            <Text
              style={[
                font.body,
                {
                  width: 280,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                },
              ]}>
              Order from the best local restaurants with easy, on-demand
              delivery.
            </Text>
          </View>
        </View>
        <View key="2">
          <Image
            source={require('../../../../../assets/img/wk2.png')}
            resizeMode="contain"
            style={{width: 'auto', marginTop: 90, marginHorizontal: 38}}
          />

          <View
            style={[
              {
                width: 'auto',
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
              },
            ]}>
            <Text
              style={[
                font.headline,
                {
                  color: Colors.Main,
                  textAlign: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                },
              ]}>
              Free delivery offers
            </Text>

            <Text
              style={[
                font.body,
                {
                  width: 300,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                },
              ]}>
              Free delivery for new customers via Apple Pay and others payment methods.
            </Text>
          </View>
        </View>
        <View key="3">
          <Image
            source={require('../../../../../assets/img/wk3.png')}
            resizeMode="contain"
            style={{width: 'auto', marginTop: 25, marginHorizontal: 34}}
          />

          <View
            style={[
              {
                width: 'auto',
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
              },
            ]}>
            <Text
              style={[
                font.headline,
                {
                  color: Colors.Main,
                  textAlign: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                },
              ]}>
              Choose your food
            </Text>

            <Text
              style={[
                font.body,
                {
                  width: 300,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                },
              ]}>
              Easily find your type of food craving and you’ll get delivery in wide range.
            </Text>
          </View>
        </View>
      </PagerView>

      <View style={components.indicatorContainer}>{renderIndicators()}</View>

      <B1 title="Get Started" style={{marginHorizontal: 20, marginTop: 60}} onPress={()=>{
        NavitgateTo('Signin');
      }}/>
    </View>
  );
};

export default Wk;
