import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles, font, components, Colors } from '../../../../customs/Styles';
import TopBar from '../../../../customs/Others/TopBar';
import Form1 from '../../../../customs/Form/Form1';
import B1 from '../../../../customs/Button/B1';
import B2 from '../../../../customs/Button/B2';
import B3 from '../../../../customs/Button/B3';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ParamList, ParamsScreenEnum } from '../../../navigation/RootNavigation';

type SignInNavigationProp = NavigationProp<ParamList, ParamsScreenEnum.Signin>;

const Signin = () => {
  const greeting1: string = 'Enter your Phone number or Email for sign in, Or ';
  const greeting2: string = 'Create new account.';

  const navigation = useNavigation<SignInNavigationProp>();
  const NavigateTo = (name: keyof ParamList) => {
    navigation.navigate(name);
  }

  // value const
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // validate const
  const [check, setCheck] = useState('');

  const handleSubmit = () => {
    let formData = {
      _username: username,
      _password: password
    }
    formData._username === '' ? setCheck('không được bỏ trống') : setCheck('');
    formData._password === '' ? setCheck('không được bỏ trống') : setCheck('');

    navigation.navigate(ParamsScreenEnum.AppNavigation);
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} translucent={false} />

      {/* <TopBar left name="Sign In" /> */}

      <View style={styles.container1}>
        <Text style={[font.h1Title, { color: Colors.Main }]}>Welcome to</Text>

        <Text
          style={[font.body, { width: 245, marginBottom: 34, marginTop: 20 }]}>
          {greeting1}

        <Text style={{ color: Colors.active }}
          onPress={() => { NavigateTo(ParamsScreenEnum.Signup) }}>{greeting2}</Text>
        </Text>


        <Form1 showIcon
          onChangeText={(value: any) => setUsername(value)}
        />
        <Text style={{ color: 'red' }}>{check}</Text>
        <Form1
          showIcon
          password
          placeholder="Password"
          style={{
            marginTop: 14,
          }}
          onChangeText={(value: any) => setPassword(value)}
        />
        <Text style={{ color: 'red' }}>{check}</Text>

        <Text style={[font.caption, { textAlign: 'center', marginVertical: 20 }]}>
          Forget Password?
        </Text>

        <B1 title="Sign in"
          onPress={() => { handleSubmit() }} />

        <Text style={[font.caption, { textAlign: 'center', marginVertical: 20 }]}>
          Or
        </Text>

        {/* <B3 style={{width: '100%'}} title="Connect with Phone Number" onPress={()=>{
          NavigateTo('Phone')
        }}/> */}
        <B2
          title='Connect with Google'
          type="Google"
          style={{ backgroundColor: Colors.blue, }}
        />
        {/* <B2 title='Connect with Facebook' type="Facebook" /> */}
      </View>
    </View>
  );
};

export default Signin;
