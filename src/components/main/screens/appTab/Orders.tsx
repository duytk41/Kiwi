import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {font, styles} from '../../../customs/Styles';
import TopBar from '../../../customs/Others/TopBar';
import OrderRow from '../../../customs/List/OrderRow';

interface Order {
  id: string | undefined;
  date: string | undefined;
  quantity: number | undefined;
  price: number | undefined;
  orders: string[] | undefined;
}

const orders: Order[] = [
  {
    id: 'HD001',
    date: '2023-09-05',
    quantity: 3,
    price: 150.75,
    orders: ['Hamburger', 'Cooctail', 'Chicken Soup'],
  },
  {
    id: 'HD002',
    date: '2023-09-06',
    quantity: 2,
    price: 89.99,
    orders: ['Hamburger', 'Cooctail'],
  },
  // Các đơn hàng khác ở đây
];

const Orders = () => {
  return (
    <ScrollView style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <TopBar name="Your Orders" />

      <View style={[styles.container, {paddingHorizontal: 20}]}>
        <Text style={[font.button, {color: 'black', marginVertical: 10}]}>
          On the Road
        </Text>

        {orders.map((item, index) => (
          <OrderRow
            key={index}
            name={item.id}
            description={item.orders?.join(', ')}
            price={item.price?.toString()}
            quantity={item.quantity}
          />
        ))}
      </View>

      <View style={[styles.container, {paddingHorizontal: 20}]}>
        <Text style={[font.button, {color: 'black', marginVertical: 10}]}>
          Delivered
        </Text>

        {orders.map((item, index) => (
          <OrderRow
            key={index}
            name={item.id}
            description={item.orders?.join(', ')}
            price={item.price?.toString()}
            quantity={item.quantity}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Orders;
