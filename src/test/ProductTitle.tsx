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

const ProductTitle = () => {
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [resName, setResName] = useState('');
    const [description, setDescription] = useState('');
    const [discount, setDiscount] = useState('');
    const [prepareTime, setPrepareTime] = useState('');
    const [orderQuantity, setOrderQuantity] = useState('');
    const [note, setNote] = useState('');

    return (
        <View style={[styles.container1,{marginHorizontal: 10}]}>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
            {/* <CommonHeader title='Tạo nhà hàng'/> */}
            {/* style={{ backgroundColor: 'blue' }} */}
            <ScrollView >
                <Image source={require('../assets/img /mcDonald.png')} style={{ width: 345, height: 185, borderRadius: 10,}} />
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={[font.h2Title]}>Cheeto</Text>
                    <Text style={[font.h3Title]}>Price</Text>
                </View>

                <Text style={[font.subhead]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Unde, veniam repudiandae in commodi est similique eveniet officiis quis quo rerum earum iste 
                dolore consectetur optio repellat illum nulla amet. Optio?</Text>
                <Text style={[font.subhead, {marginTop: 10}]}>Nhà hàng: Mc Donald</Text>
                <Text style={[font.subhead, {marginTop: 10}]}>Giảm giá: 25%</Text>
                <Text style={[font.subhead, {marginTop: 10}]}>Thời gian chuẩn bị: 25 phút</Text>

                <Form1
                    placeholder='Lưu ý'
                    style={[{ marginTop: 14, borderBlockColor: '' }]}
                />
                <Form1
                    placeholder='Số lượng'
                    style={[{ marginTop: 14, borderBlockColor: '' }]}
                />
            </ScrollView>
            <B1 title='Submit'
            style={[{ borderBlockColor: '' }]}
            />
        </View>
    )
}

export default ProductTitle