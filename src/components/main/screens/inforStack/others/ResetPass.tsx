import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles, Colors, font} from '../../../../../components/customs/Styles';
import B1 from '../../../../customs/Button/B1';
import TopBar from '../../../../customs/Others/TopBar';

const ResetPass = () => {
  const greeting1: string = 'We have sent a instructions email to ';
  const greeting2: string = 'Having problem?';
  const email: string = 'Nawfazim@icloud.com.';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar left name="Forgot Password" />

      <View style={styles.container1}>
        <Text style={[font.h1Title, {color: Colors.Main}]}>
          Reset email sent
        </Text>

        <Text
          style={[font.body, {width: 300, marginBottom: 34, marginTop: 20}]}>
          {greeting1 + " " + email+" "}
          <Text style={{color: Colors.active}}>{greeting2}</Text>
        </Text>

        <B1 title="Send again" />
      </View>
    </View>
  );
};

export default ResetPass;
