import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles, Colors, font} from '../../../../customs/Styles';
import TopBar from '../../../../customs/Others/TopBar';
import B1 from '../../../../customs/Button/B1';
import CodeFill from '../../../../customs/Others/CodeFill';

const ConfirmPhone = () => {
  const greeting: string = 'Enter the 4-Digit code sent to you at';
  const phone: string = '+1501333982';
  const term: string ='By Signing up you agree to our Terms Conditions' +
  ' & Privacy Policy.';
  const question1: string = 'Didn`t receive the code?';
  const question2: string = 'Resend Again';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar left name="Login to Kiwi" />

      <View style={[styles.container1]}>
        <Text style={[font.h3Title, {color: Colors.Main, alignSelf: 'center'}]}>
          Verify phone number
        </Text>

        <Text
          style={[
            font.body,
            {
              width: 275,
              marginTop: 10,
              alignSelf: 'center',
              textAlign: 'center',
            },
          ]}>
          {greeting + ' ' + phone}
        </Text>

        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginVertical: 25,
          }}>
          <CodeFill />
          <CodeFill />
          <CodeFill />
          <CodeFill />
        </View>

        <B1 title="Sign in" />

        <Text
          style={[
            font.caption,
            {
              width: 245,
              marginBottom: 34,
              marginTop: 20,
              alignSelf: 'center',
              textAlign: 'center',
            },
          ]}>
          {question1}
          <Text style={{color: Colors.active}}>{question2}</Text>
        </Text>

        <Text
          style={[
            font.body,
            {
              textAlign: 'center',
              width: 285,
              alignSelf: 'center',
            },
          ]}>
          {term}
        </Text>
      </View>
    </View>
  );
};

export default ConfirmPhone;
