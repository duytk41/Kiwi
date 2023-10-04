import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles, Colors, font} from '../../../../../components/customs/Styles';
import TopBar from '../../../../customs/Others/TopBar';
import B1 from '../../../../customs/Button/B1';
import Form2 from '../../../../customs/Form/Form2';

const Phone = () => {
  const greeting: string =
    'Enter your phone number to use Kiwi and enjoy your food :)';
  const term: string =
    'By Signing up you agree to our Terms Conditions & Privacy Policy.';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar left name="Login to Kiwi" />

      <View style={[styles.container1]}>
        <Text style={[font.h3Title, {color: Colors.Main, alignSelf: 'center'}]}>
          Get started with Kiwi
        </Text>

        <Text
          style={[
            font.body,
            {
              width: 275,
              marginBottom: 34,
              marginTop: 20,
              alignSelf: 'center',
              textAlign: 'center',
            },
          ]}>
          {greeting}
        </Text>

        <Form2 title="Phone number" style={{marginBottom: 100}}/>

        <B1 title="Sign in" style={{marginVertical: 20}} />

        <Text
          style={[
            font.body,
            {textAlign: 'center', width: 285, alignSelf: 'center'},
          ]}>
          {term}
        </Text>
      </View>
    </View>
  );
};

export default Phone;
