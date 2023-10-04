import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, ScrollView, StatusBar, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { styles, Colors, font, components } from '../components/customs/Styles';
import Fade from '../components/customs/animations/Fade';
import Move from '../components/customs/animations/Move';
import B1 from '../components/customs/Button/B1';
import B2 from '../components/customs/Button/B2';
import B3 from '../components/customs/Button/B3';
import Big from '../components/customs/Card/Big';
import PagerView from 'react-native-pager-view';
import { create } from 'react-test-renderer';
import Form1 from '../components/customs/Form/Form1';
import Form2 from '../components/customs/Form/Form2';
import Form4 from '../components/customs/Form/Form4';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../components/customs/Button/CommonHeader';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PhotoIcon as PhotoIconOutline} from 'react-native-heroicons/outline';



const CreateMenu = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [selectedIdIS, setSelectedIdIS] = useState<string | undefined>();
  const [selectedIdTD, setSelectedIdTD] = useState<string | undefined>();
  const inStock: RadioButtonProps[] = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Có',
      value: 'True'
    },
    {
      id: '2',
      label: 'Không',
      value: 'False'
    }
  ]), []);
  const typicalDish: RadioButtonProps[] = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Có',
      value: 'True'
    },
    {
      id: '2',
      label: 'Không',
      value: 'False'
    }
  ]), []);

  const requestCameraPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        const result:any = await launchCamera({mediaType:'photo',cameraType:'back'})
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
        const result:any = await launchImageLibrary({mediaType:'photo'});
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
  };

  return (
    <View style={[styles.container1]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <CommonHeader title='Tạo Menu' />

      <ScrollView
        style={{ marginHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
      >

        <View >
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


          {/* <TouchableOpacity>
            <Form1
              placeholder='Nhập ảnh món ăn'
              style={[{ marginTop: 14, borderBlockColor: '' }]}
            />
          </TouchableOpacity> */}

          <B1 title='Nhập ảnh từ thư viện' 
          style={[{ marginTop: 14, borderBlockColor: '' }]}
          onPress={() => requestLibraryPermissions()}/>
        </View>
        <Form1
          placeholder='Tên món ăn'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
        />

        <Form1
          placeholder='Giá'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
        />

        <Form1
          placeholder='Giảm giá (nếu có)'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
        />

        <Form1
          placeholder='Thời gian chuẩn bị'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
        />

        <Form1
          placeholder='Nguyên liệu'
          style={[{ marginTop: 14, borderBlockColor: '' }]}
        />


        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 14 }]}>
          <Text style={[font.body,
          {
            color: Colors.Main,
          }]}>
            Còn bán:
          </Text>
          <RadioGroup
            radioButtons={inStock}
            onPress={setSelectedIdIS}
            selectedId={selectedIdIS}
            layout='row'
          />
        </View>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={[font.body,
          {
            color: Colors.Main,
          }]}>
            Món ăn tiêu biểu:
          </Text>
          <RadioGroup
            radioButtons={typicalDish}
            onPress={setSelectedIdTD}
            selectedId={selectedIdTD}
            layout='row'
          />
        </View>

        <B1 title="Submit" 
        style={[{marginVertical: 14}]}/>
      </ScrollView>
    </View>



  );
};

export default CreateMenu;