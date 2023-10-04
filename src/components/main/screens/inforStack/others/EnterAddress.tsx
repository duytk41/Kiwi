import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles, Colors, font, components} from '../../../../customs/Styles';
import B1 from '../../../../customs/Button/B1';
import Form4 from '../../../../customs/Form/Form4';
import Form1 from '../../../../customs/Form/Form1';
import Form2 from '../../../../customs/Form/Form2';
import Address from '../../../../customs/List/Address';

const EnterAddress = () => {
  const [focused, setFocused] = React.useState(false);

  const data = [
    {city: 'San Francisco', state: 'California'},
    {city: 'New York', state: 'New York'},
    {city: 'Los Angeles', state: 'California'},
  ];

  const greeting: string =
    'Please enter your location or allow access to ' +
    'your location to find restaurants near you.';

  const handleFoucs = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View style={[styles.container2]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TouchableOpacity>
        <Image source={require('../../../../../assets/icon/34/close.png')} />
      </TouchableOpacity>

      <Text
        style={[
          font.h3Title,
          {
            color: Colors.Main,
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 24,
          },
        ]}>
        Find restaurants near you
      </Text>

      <Text
        style={[
          font.body,
          {
            width: '90%',
            alignSelf: 'center',
            textAlign: 'center',
          },
        ]}>
        {greeting}
      </Text>

      <B1
        title={'Use current location'}
        showIcon
        color={Colors.active}
        style={[
          components.componentsSpace,
          {
            backgroundColor: Colors.white,
            borderColor: Colors.active,
            borderWidth: 1,
            display: focused ? 'none' : 'flex',
          },
        ]}
      />

      <Form4
        style={focused ? components.componentsSpace : undefined}
        onFocused={handleFoucs}
        onBlur={handleBlur}
      />

      <FlatList
        data={data}
        renderItem={({item}) => (
          <Address
            city={item.city}
            state={item.state}
            style={{marginBottom: 10, marginHorizontal: 16}}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default EnterAddress;
