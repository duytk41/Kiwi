import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles, Colors, font} from '../../../../../components/customs/Styles';
import B1 from '../../../../customs/Button/B1';
import Form2 from '../../../../customs/Form/Form2';
import TopBar from '../../../../customs/Others/TopBar';

const ForgotPass = () => {
  const greeting: string =
    'Enter your email address and we will send you a reset instructions.';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar left name="Forgot password" />

      <View style={[styles.container1]}>
        <Text style={[font.h1Title, {color: Colors.Main}]}>
        Forgot password
        </Text>

        <Text
          style={[
            font.body,
            {
              width: 275,
              marginBottom: 34,
              marginTop: 20,
            },
          ]}>
          {greeting}
        </Text>

        <Form2 title="Email address" style={{marginBottom: 24}} />

        <B1 title="Reset password" style={{marginVertical: 20}} />

        
      </View>
    </View>
  );
};

export default ForgotPass;
