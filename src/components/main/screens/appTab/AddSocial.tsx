import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import TopBar from '../../../customs/Others/TopBar';
import B2 from '../../../customs/Button/B2';

const AddSocial = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />

      <TopBar name="Add Social Accounts" left />
      <View style={[styles.container1]}>
        <Text
          style={[
            font.h3Title,
            {
              marginBottom: 24,
              marginTop: 80,
              textAlign: 'center',
              color: Colors.Main,
            },
          ]}>
          Add Social Accounts
        </Text>
        <Text
          style={[
            font.body,
            {
              alignSelf: 'center',
              width: 315,
              textAlign: 'center',
              marginBottom: 34,
            },
          ]}>
          Add your social accounts for more security. You will go directly to
          their site.
        </Text>

        <B2 type="Facebook" title="Connect with Facebook" />
        <B2
          type="Google"
          title="Connect with Google"
          style={{backgroundColor: Colors.blue, marginTop: 16}}
        />
      </View>
    </View>
  );
};

export default AddSocial;
