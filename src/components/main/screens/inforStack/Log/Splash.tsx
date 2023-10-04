import { View, Text, Image, StatusBar, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../../../../customs/Styles'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ParamList } from '../../../navigation/RootNavigation'

const Splash = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const fadeAnim = new Animated.Value(0);

  const NavitgateTo = (name: keyof ParamList) => {
    navigation.navigate(name);
  }
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) console.log('Finished');
      else console.log('Not finished');
    });
  };

  // Hàm fade out animation
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) console.log('Finished');
      else console.log('Not finished');
    });
  };

  useEffect(() => {
    fadeIn(); // Hiển thị màn hình splash
    setTimeout(fadeOut, 1000); // Ẩn màn hình sau 1s và chuyển màn hình khác
    NavitgateTo('Wk');
  }, []);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <StatusBar backgroundColor={'transparent'} barStyle={"dark-content"} translucent/>
        <Image source={require('../../../../../assets/img/Wallpaper.png')} resizeMode='cover' style={{
          marginLeft: "-17%"
        }} />
    </Animated.View>
  )
}

export default Splash