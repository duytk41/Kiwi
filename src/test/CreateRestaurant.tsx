import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, Button, ScrollView, StatusBar, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { styles, Colors, font, components } from '../components/customs/Styles';
import Fade from '../components/customs/animations/Fade';
import Move from '../components/customs/animations/Move';
import B1 from '../components/customs/Button/B1';
import B2 from '../components/customs/Button/B2';
import B3 from '../components/customs/Button/B3';
import Big from '../components/customs/Card/Big';
import Form1 from '../components/customs/Form/Form1';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../components/customs/Button/CommonHeader';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PhotoIcon as PhotoIconOutline} from 'react-native-heroicons/outline';

const CreateRestaurant = () => {
  const navigation = useNavigation();
  // value const
  const [resName, setResName] = useState('');
  const [resType, setResType] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [hotline, setHotline] = useState('');
  // validate const
  const [checkEmail, setCheckEmail] = useState(true);
  const [check, setCheck] = useState('');

  const requestCameraPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        const result: any = await launchCamera({ mediaType: 'photo', cameraType: 'back' })
        console.log(result.assets[0].uri);
        setImg(result.assets[0].uri);
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLibraryPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Library permission given");
        const result: any = await launchImageLibrary({ mediaType: 'photo' });
        console.log(result.assets[0].uri);
        setImg(result.assets[0].uri);
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleSubmit = () => {
    let formData = {
      _resName: resName,
      _resType: resType,
      _description: description,
      _img: img,
      _email: email,
      _address: address,
      _hotline: hotline,
    }
    let regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!regexEmail.test(formData._email)) {
      setCheckEmail(false);
      
    }
    else {
      setCheckEmail(true);
    }

    formData._address === '' ? setCheck('không được bỏ trống') : setCheck('');

  };

  return (
    <View style={[styles.container1]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <CommonHeader title='Tạo nhà hàng' />

      <ScrollView
        style={{ marginHorizontal: 12 }}
        showsVerticalScrollIndicator={false}>
          
          <TouchableOpacity 
          style={[{ width: 345, height: 185, borderRadius: 10, backgroundColor: Colors.input }]}
          onPress={() => requestCameraPermissions()}
          >
              {img != '' ? <Image source={{ uri:img }} style={{width: '100%', height: '100%', borderRadius: 10}} /> :
                <View style={{justifyContent: 'center', alignItems: 'center',width: '100%', height: '100%'}}>
                  <PhotoIconOutline color='grey'></PhotoIconOutline>
                </View>
              }
          </TouchableOpacity>

          {/* <B1 title='Nhập ảnh nhà hàng'
            
            style={[{ marginTop: 14, borderBlockColor: '' }]} /> */}
        
        <Form1
          placeholder='Tên nhà hàng'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
          onChangeText={(value: any) => setResName(value)}
        />

        <Form1
          placeholder='Kiểu nhà hàng'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
          onChangeText={(value: any) => setResType(value)}
        />
        <Form1
          placeholder='Mô tả về nhà hàng'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
          onChangeText={(value: any) => setDescription(value)}
        />

        <View style={[{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 12 }]}>
          <Text style={[font.subhead, { color: Colors.Main }]}>Thông tin liên Hệ</Text>
          <View style={[{ borderColor: "black", borderStyle: "solid", borderWidth: 0.5, flex: 1 }]}></View>
        </View>

        <Form1
          placeholder='Địa chỉ'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
          onChangeText={(value: any) => setAddress(value)}
        />
        <Text style={{ color: 'red' }}>{check}</Text>

        <Form1
          placeholder='Hotline'
          style={[{ borderBlockColor: '' }]}
          onChangeText={(value: any) => setHotline(value)}
        />

        <Form1
          placeholder='Email'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
          onChangeText={(value: any) => setEmail(value)}
        />
        <Text style={{ color: 'red' }}>{!checkEmail ? 'Sai định dạng email' : ''}</Text>
        <B1 title="Submit"
          style={[{ marginBottom: 14 }]}
          onPress={() => {
            handleSubmit();
            // navigation.navigate('CreateMenu')
          }}
        />
      </ScrollView>

    </View>


  );
};

export default CreateRestaurant;