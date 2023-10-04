import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../../customs/Styles';
import TopBar from '../../../customs/Others/TopBar';
import OrderRow from '../../../customs/List/OrderRow';
import B1 from '../../../customs/Button/B1';
import Normal from '../../../customs/List/Normal';
import Simple from '../../../customs/List/Simple';

const Cart = () => {
  const carts = [
    {
      quantity: 1,
      name: 'Cookie Sandwich',
      description: 'Shortbread, chocolate turtle cookies, and red velvet.',
      price: 'USD 7.4',
    },
    {
      quantity: 1,
      name: 'Cookie Sandwich',
      description: 'Shortbread, chocolate turtle cookies, and red velvet.',
      price: 'USD 12.4',
    },
    {
      quantity: 2,
      name: 'Oyster Dish',
      description: 'Shortbread, chocolate turtle cookies, and red velvet.',
      price: 'USD 17.4',
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar
        name="Your Orders"
        left
        leftIcon={require('../../../../assets/icon/24/close.png')}
      />

      <View style={[styles.container1]}>
        <View style={[{flex: 1}]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {carts.map((item, index) => {
              return <OrderRow key={index} {...item} />;
            })}
          </ScrollView>
        </View>

        <View style={[{marginVertical: 16}]}>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text style={[font.body, {color: Colors.Main}]}>Subtotal</Text>
            <Text style={[font.body, {color: Colors.Main}]}>USD 37.2</Text>
          </View>

          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 4,
              },
            ]}>
            <Text style={[font.body, {color: Colors.Main}]}>Deliver</Text>
            <Text style={[font.body, {color: Colors.Main}]}>USD 0</Text>
          </View>

          <View
            style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text style={[font.body, {color: Colors.Main, fontWeight: '600'}]}>
              Total{' '}
              <Text style={[font.body, {color: Colors.Main,  fontWeight: '400'}]}>(incl. VAT)</Text>
            </Text>
            <Text style={[font.body, {color: Colors.Main}]}>USD 37.2</Text>
          </View>
        </View>

        <View>
            <Simple title='Add more items' font={{color: Colors.active}}/>
            <Simple title='Promo code'/>
        </View>

        <B1
          title="Continue ($37.2)"
          style={{marginBottom: 30, marginTop: 45}}
        />
      </View>
    </View>
  );
};

export default Cart;
