import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  styles,
  Colors,
  font,
} from '../../../../../components/customs/Styles';
import TopBar from '../../../../customs/Others/TopBar';
import B1 from '../../../../customs/Button/B1';
import Form1 from '../../../../customs/Form/Form1';

const Signup = () => {
  const greeting1: string = 'Enter your Name, Email and Password for sign up. ';
  const greeting2: string = 'Already have account?';
  const term: string =
    'By Signing up you agree to our Terms Conditions & Privacy Policy.';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar left name="Sign Up" />

      <View style={[styles.container1]}>
        <Text style={[font.h1Title, {color: Colors.Main}]}>Create Account</Text>

        <Text
          style={[font.body, {width: 275, marginBottom: 34, marginTop: 20}]}>
          {greeting1}
          <Text style={{color: Colors.active}}>{greeting2}</Text>
        </Text>

        <Form1
          tint={Colors.active}
          rightIcon={require('../../../../../assets/icon/24/done.png')}
          placeholder="Full name"
        />
        <Form1
          tint={Colors.active}
          rightIcon={require('../../../../../assets/icon/24/done.png')}
          placeholder="Email Address"
          style={{
            marginVertical: 18,
          }}
        />
        <Form1 showIcon password placeholder="Password" />

        <B1 title="Sign up" style={{marginVertical: 20}} />

        <Text
          style={[
            font.caption,
            {textAlign: 'center', width: 285, alignSelf: 'center'},
          ]}>
          {term}
        </Text>

      </View>
    </View>
  );
};

export default Signup;
